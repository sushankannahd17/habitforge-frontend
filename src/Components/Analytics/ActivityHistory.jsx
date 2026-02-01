import { useEffect, useState } from "react";
import api from "../../Api";
import useAuth from "../../Hooks/useAuth";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ActivityHistory({ month, year }) {
  const [activityData, setActivityData] = useState([]);
  const { user } = useAuth();

  // Normalize backend data into days of month
  const normalizeActivityData = (data) => {
    const daysInMonth = new Date(year, month, 0).getDate();

    // base: { "1":0, "2":0, ..., "31":0 }
    const base = {};
    for (let i = 1; i <= daysInMonth; i++) {
      base[i] = 0;
    }

    data.forEach((item) => {
      const day = Number(item._id); // "20" → 20
      base[day] = item.count;
    });

    return Object.keys(base).map((day) => ({
      day,
      value: base[day],
    }));
  };

  useEffect(() => {
    if (!user?.userID || !month || !year) return;

    const fetchActivityData = async () => {
      try {
        const result = await api.post("/analytics/activityHistory", {
          userID: user.userID,
          month,
          year,
        });

        setActivityData(normalizeActivityData(result.data.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchActivityData();
  }, [user.userID, month, year]);

  const labels = activityData.map((d) => d.day);
  const values = activityData.map((d) => d.value);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: "#818cf8",
        borderRadius: 8,
        barThickness: 16,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { precision: 0 },
      },
    },
  };

  return (
    <div className="h-70 w-[80%] bg-white mt-10 ml-30 p-4">
      <Bar data={chartData} options={options} />
    </div>
  );
}

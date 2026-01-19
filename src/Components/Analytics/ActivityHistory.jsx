import { useEffect, useState } from "react";
import api from "../../api";
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

export default function ActivityHistory() {
  const [activityData, setActivityData] = useState([]);
  const { user } = useAuth();

  const normalizeActivityData = (activityData) => {
    const base = {
      M: 0,
      T: 0,
      W: 0,
      T2: 0,
      F: 0,
      S: 0,
      S2: 0,
    };

    activityData.forEach((item) => {
      const dayIndex = item._id;
      const count = item.count;

      const mappedDay =
        dayIndex === 1
          ? "S2"
          : dayIndex === 2
            ? "M"
            : dayIndex === 3
              ? "T"
              : dayIndex === 4
                ? "W"
                : dayIndex === 5
                  ? "T2"
                  : dayIndex === 6
                    ? "F"
                    : "S";

      base[mappedDay] = count;
    });

    return [
      { day: "M", value: base.M },
      { day: "T", value: base.T },
      { day: "W", value: base.W },
      { day: "T", value: base.T2 },
      { day: "F", value: base.F },
      { day: "S", value: base.S },
      { day: "S", value: base.S2 },
    ];
  };

  useEffect(() => {
    if (!user?.userID) return;

    const fetchActivityData = async () => {
      try {
        const result = await api.post("/analytics/activityHistory", {
          userID: user.userID,
        });

        setActivityData(normalizeActivityData(result.data.data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchActivityData();
  }, [user]);

  console.log(activityData);

  const labels = activityData.map((d) => d.day);
  const values = activityData.map((d) => d.value);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: "#818cf8",
        borderRadius: 8,
        barThickness: 36,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-64 w-[50%] bg-white mt-10 ml-30">
      <Bar data={chartData} options={options} />
    </div>
  );
}

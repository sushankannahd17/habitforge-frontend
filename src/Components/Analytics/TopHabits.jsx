import { useEffect, useState } from "react";
import api from "../../API.jsx";
import useAuth from "../../Hooks/useAuth";

export default function TopHabits({ month, year }) {
  const { user } = useAuth();
  const [topHabits, setTopHabits] = useState([]);

  useEffect(() => {
    const fetchTopHabits = async () => {
      const data = await api.post("/analytics/topHabits", {
        userID: user.userID,
        month,
        year
      });

      setTopHabits(data.data.data);
    };

    fetchTopHabits();
  }, [user, month, year]);

  return (
    <div className="w-5/12 bg-white ml-30 mt-10 rounded-lg">
      <h1 className="inter-heading text-3xl pt-5 pl-5">Top Habits</h1>

      {topHabits.map((habit, index) => (
        <div key={habit.habitName || index} className="px-6 mt-5">
          <div className="flex items-center gap-4">
            <i
              className={`text-2xl w-12 h-12 flex items-center justify-center rounded-md ${habit.categoryIcon}`}
            ></i>

            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-medium">{habit.habitName}</p>
                <p className="text-sm font-semibold">{habit.percent}%</p>
              </div>

              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${habit.percent}%`,
                    backgroundColor:
                      habit.percent >= 100 ? "#EF4444" : habit.color,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

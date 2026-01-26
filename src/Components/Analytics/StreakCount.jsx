import { FaFire } from "react-icons/fa";
import api from "../../api";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function PerfectDays() {
  const [streak, setStreak] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const getStreakCount = async () => {
      const count = await api.post("/analytics/calculateStreaks", {
        userID: user.userID
      });

      setStreak(count.data.result);
    };

    getStreakCount();
  }, [user]);

  return (
    <div className="w-1/6 ml-10 mt-10 h-40 bg-white">
      <div className="flex items-start justify-between pt-6 pl-5 pr-5">
        <h1 className="text-2xl inter-heading font-bold">Current Streak</h1>
        <FaFire size={30} />
      </div>
      <p className="inter-para text-4xl pt-4 pl-5 text-black">{streak}</p>
    </div>
  );
}

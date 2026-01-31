import { CiStar } from "react-icons/ci";
import api from "../../api.jsx";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function PerfectDays({ month, year }) {
  const [perfectDays, setPerfectDays] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const getPerfectDays = async () => {
      const count = await api.post("/analytics/perfectDays", {
        userID: user.userID,
        month,
        year,
      });

      setPerfectDays(count.data.resultCount);
    };

    getPerfectDays();
  }, [user, month, year]);

  return (
    <div className="w-1/6 ml-10 mt-10 h-40 bg-white">
      <div className="flex items-start justify-between pt-6 pl-5 pr-5">
        <h1 className="text-2xl inter-heading font-bold">Perfect Days</h1>
        <CiStar size={30} />
      </div>
      <p className="inter-para text-4xl pt-4 pl-5 text-black">{perfectDays}</p>
      <p className="inter-para pt-4 pl-5 text-gray-400">This month</p>
    </div>
  );
}

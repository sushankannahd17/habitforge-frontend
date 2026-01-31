import api from "../../API.jsx";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function OverallCompletionRate() {
  const [overallCompletionRate, setoverallCompletionRate] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const getoverallCompletionRate = async () => {
      const result = await api.post("/dashboard/overallCompletionRate", {
        userID: user.userID
      });

      setoverallCompletionRate(result.data.result.toFixed(2));
    };

    getoverallCompletionRate();
  }, [user]);

  return (
    <div className="w-1/6 ml-10 mt-10 h-40 bg-white">
      <div className="flex items-start justify-between pt-6 pl-5 pr-5">
        <h1 className="text-2xl inter-heading font-bold">Overall Completion Rate</h1>
      </div>
      <p className="inter-para text-4xl pt-4 pl-5 text-black">{overallCompletionRate}</p>
    </div>
  );
}

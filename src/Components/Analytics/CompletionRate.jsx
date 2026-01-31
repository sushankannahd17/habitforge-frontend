import { useEffect, useState } from "react";
import api from "../../Api.jsx";
import useAuth from "../../Hooks/useAuth";
import { IoAnalytics } from "react-icons/io5";

export default function CompletionRate({ month, year }) {
  const { user } = useAuth();
  const [completionRate, setCompletionRate] = useState(0);

  useEffect(() => {
    const getRate = async () => {
      const rate = await api.post("/analytics/completionRate", {
        userID: user.userID,
        month,
        year,
      });

      setCompletionRate(rate.data.message.toFixed(2));
    };

    getRate()
  }, []);

  return (
    <div className="w-1/6 ml-30 mt-10 h-40 bg-white">
        <div className="flex items-start justify-between pt-6 pl-5 pr-5">
        <h1 className="text-2xl inter-heading font-bold">Completion Rate:</h1>
        <IoAnalytics size={30}/>
        </div>
        <p className="inter-heading text-4xl pt-4 pl-5 text-black">{completionRate}%</p>
    </div>
    );
}

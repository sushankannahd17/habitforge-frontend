import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import useAuth from "../../Hooks/useAuth";
import api from "../../api.jsx";

export default function TotalCompleted() {
    const { user } = useAuth();
    const [totalCompleted, setTotalCompleted] = useState(0);

    useEffect(() => {
    const getTotalCompleted = async () => {
      const total = await api.post("/analytics/totalCompleted", {
        userID: user.userID,
      });

      setTotalCompleted(total.data.totalCount);
    };

    getTotalCompleted()
  }, []);

  return (
    <div className="w-1/6 ml-10 mt-10 h-40 bg-white">
      <div className="flex items-start justify-between pt-6 pl-5 pr-5">
        <h1 className="text-2xl inter-heading font-bold">Total Completed</h1>
        <SiTicktick size={30} />
      </div>
      <p className="inter-para text-4xl pt-4 pl-5 text-black">
        {totalCompleted}
      </p>
      <p className="inter-para pt-4 pl-5 text-gray-400">
        Since created
      </p>
    </div>
  );
}

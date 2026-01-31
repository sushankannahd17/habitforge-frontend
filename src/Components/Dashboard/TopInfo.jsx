import useAuth from "../../Hooks/useAuth";
import { GoDotFill } from "react-icons/go";
import api from "../../api.jsx";
import { useEffect, useState } from "react";

export default function TopInfo() {
  const { user } = useAuth();
  let timeStatus = time();

  const [ loggedData, setLoggedData ] = useState([]);

  useEffect(() => {
    const fetchLoggedData = async () => {
        const res = await api.get("/habitlog/get", {
            params: {
                userID: user.userID
            }
        })
        setLoggedData(res.data.resultData || []);
    };

    fetchLoggedData();
  },[])

  return (
    <div>
      <h1 className="inter-heading text-3xl ml-20 mt-10">
        {timeStatus.status}!👋
      </h1>
      <p
        className="inter-para ml-20 mt-3 text-gray-400 flex"
        style={{ fontSize: "16px" }}
      >
        {timeStatus.day}, {timeStatus.month} {timeStatus.date} <GoDotFill className="mt-1 ml-1"/> You have {loggedData.length} habits left today
      </p>
    </div>
  );
}

function time() {
  const d = new Date();
  let hours = d.getHours();

  let status = "";

  if (0 <= hours && hours < 12) status = "Good Morning";
  else if (12 <= hours && hours < 16) status = "Good Afternoon";
  else if (16 <= hours <= 23) status = "Good Evening";

  const day = d.toLocaleDateString("en-US", { weekday: "long" });

  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(d);

  const date = d.getDate();

  return { status, day, month, date };
}

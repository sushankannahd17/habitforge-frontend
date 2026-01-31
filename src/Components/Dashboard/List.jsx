import { useEffect, useState } from "react";
import api from "../../api";
import useAuth from "../../Hooks/useAuth";
import { GoDotFill } from "react-icons/go";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function List() {
  const { user } = useAuth();
  const [loggedData, setLoggedData] = useState([]);

  const navigator = useNavigate();

  const fetchData = async () => {
    const res = await api.get("/habitLog/get", {
      params: {
        userID: user.userID,
      },
    });

    setLoggedData(res.data.resultData);
  };

  const changeTick = (habitId, currentTicked) => {
    toast.promise(
      api.patch("/habitLog/modifyTick", {
        val: currentTicked,
        habitID: habitId,
        userID: user?.userID,
      }),
      {
        loading: "Loading, please wait",
        success: (res) => {
          fetchData();
          return "Modified Successfully";
        },
        error: (err) => err.response?.data?.message,
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loggedData.map((data) => {
        {
          return data.done == true ? (
            <div className="w-full h-30 bg-gray-200 flex mt-5 border-white rounded-2xl">
              <input
                type="checkbox"
                className="w-20 h-15 mt-7 ml-6"
                onChange={() => changeTick(data.habitID, !data.done)}
                checked={data.done}
              />
              <div>
                <p className="mt-6" style={{ fontSize: "20px" }}>
                  <s>{data.habitName}</s>
                </p>
                <div className="flex mt-2">
                  <p>{data.categoryName}</p>
                  <GoDotFill className="ml-1 mt-1" />
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-30 bg-white flex mt-5 border-white rounded-2xl">
              <input
                type="checkbox"
                className="w-20 h-15 mt-7 ml-6"
                checked={data.done}
                onChange={() => changeTick(data.habitID, !data.done)}
              />
              <div>
                <p className="mt-6" style={{ fontSize: "20px" }}>
                  {data.habitName}
                </p>
                <div className="flex mt-2">
                  <p>{data.categoryName}</p>
                  <GoDotFill className="ml-1 mt-1" />
                  <p>{data.description}</p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

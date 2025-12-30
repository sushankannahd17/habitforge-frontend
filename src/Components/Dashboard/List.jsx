import { useEffect, useState } from "react";
import api from "../../Api";
import useAuth from "../../Hooks/useAuth";
import { GoDotFill } from "react-icons/go";

export default function List() {
  const { user } = useAuth();
  const [ loggedData, setLoggedData ] = useState([]);
  const [ ticked, setTicked ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/habitLog/get", {
        params: {
          userID: user.userID,
        },
      });
      console.log(res);
      setLoggedData(res.data.resultData);
    };

    fetchData();
  }, []);

  return (
    <>
      {loggedData.map((data) => {
        {
            return ((data.done == true) ? (
            <div className="w-full h-30 bg-gray-500">
                <input type="checkbox"/>
            </div>) : 
            (
            <div className="w-full h-30 bg-white flex">
                <input type="checkbox" className="w-20 h-15 mt-7 ml-6" value={ticked} onChange={(e) => setTicked(true)}/>
                <div>
                    <p className="mt-6" style={{fontSize: "20px"}}>{data.habitName}</p>
                    <div className="flex mt-2">
                        <p>{data.categoryName}</p>
                        <GoDotFill className="ml-1 mt-1"/>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>
        ))
        }
      })}
    </>
  );
}

import { useEffect } from "react";
import Sidebar from "../Components/Navbar/SideBar";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AddHabit from "../Components/Dashboard/AddHabit";
import TopInfo from "../Components/Dashboard/TopInfo";
import List from "../Components/Dashboard/List";

export default function Dashboard() {
  const { user } = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    if (!user.userID) navigator("/login");
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-[#F7F8FA] flex">
        <Sidebar />
        <div className="w-full">
          <div className="flex items-start justify-between w-full">
            <TopInfo />
            <AddHabit />
          </div>
          <div className="w-full mt-4 pl-16 pr-10">
            <h1 className="inter-heading text-2xl mb-5 ml-5">Today's Habits</h1>
            <List />
          </div>
        </div>
      </div>
    </>
  );
}

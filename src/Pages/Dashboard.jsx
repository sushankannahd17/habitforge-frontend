import { useEffect } from "react";
import Sidebar from "../Components/Navbar/SideBar";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import AddHabit from "../Components/Dashboard/AddHabit";
import TopInfo from "../Components/Dashboard/TopInfo";

export default function Dashboard() {
  const { user } = useAuth();
  const navigator = useNavigate();

  useEffect(() => {
    if (!user.userID) navigator("/login");
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA] flex">
      <Sidebar />
      <div className="flex items-start justify-between w-full">
        <TopInfo />
        <AddHabit />
      </div>
    </div>
  );
}

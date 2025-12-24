import { useEffect } from "react";
import Sidebar from "../Components/Navbar/SideBar";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const { user } = useAuth();
    const navigator = useNavigate();

    useEffect(() => {
        if (!user.userID) navigator("/login")
    },[])

  return (
    <div className="w-full min-h-screen bg-[#F7F8FA]">
      <div className="flex flex-col gap-6">
        <Sidebar />
      </div>
    </div>
  );
}

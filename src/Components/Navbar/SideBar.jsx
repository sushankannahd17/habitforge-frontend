import logoImg from "../../../public/logo.png";
import { CiGrid42 } from "react-icons/ci";
import { RiListCheck3 } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { FaGear } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import api from "../../Api.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");

  useEffect(() => {
    api.post("/auth/fetchSidebarDetails", { userID: user.userID})
      .then((res) => {
        setEmail(res.data.email)
        setName(res.data.name)
        setProfilePicURL(res.data.profilePic)
      })
      .catch((err) => toast.error("Error: " + err.response?.data?.message))
  }, [])

  const avatarPreview = profilePicURL ? profilePicURL : "https://res.cloudinary.com/doea9ukcf/image/upload/v1769871937/profilePic_s4dznb.jpg";

  const handleLogout = (e) => {
    e.preventDefault();
    toast.promise(api.post("/auth/logout"), {
      loading: "Logging out...",
      success: () => {
        setUser({ userID: null, name: "", email: "" });
        navigate("/");
        return "Logged out successfully";
      },
      error: (err) => err.response?.data?.message,
    });
  };

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#F8FAFF] border-white flex-col px-6 py-6">
      <div className="flex items-center mb-10">
        <img src={logoImg} className="h-16 block" />
        <p className="poppins-semibold text-[#003B77] text-xl">Habit</p>
        <p className="poppins-bold text-[#5AA50B] text-xl">Forge</p>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <MenuItem icon={<CiGrid42 />} label="Dashboard" active={location.pathname === "/dashboard"} ref={"/dashboard"}/>
        <MenuItem icon={<RiListCheck3 />} label="Habits" active={location.pathname === "/habits"} ref={"/habits"}/>
        <MenuItem icon={<VscGraph />} label="Analytics" active={location.pathname === "/analytics"} ref={"/analytics"}/>
        <MenuItem icon={<FaGear />} label="Settings" active={location.pathname === "/settings"} ref={"/settings"}/>
      </nav>

      <div className="flex items-center gap-1 pt-6 border-t">
        <img src={avatarPreview} className="h-10 w-10 rounded-full" />
        <div className="flex-1">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>

        <button onClick={handleLogout}>
          <FiLogOut size={12} />
        </button>
      </div>
    </aside>
  );
}

function MenuItem({ icon, label, active, ref }) {
  return (
    <a href={ref}>
    <div
      className={`flex items-center mb-3 gap-3 px-3 py-2 rounded-lg cursor-pointer
        ${
          active
            ? "bg-blue-100 text-blue-600"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-2xl font-medium">{label}</span>
    </div>
    </a>
  );
}

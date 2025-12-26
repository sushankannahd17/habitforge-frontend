import logoImg from "../../../public/logo.png";
import { CiGrid42 } from "react-icons/ci";
import { RiListCheck3 } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { FaGear } from "react-icons/fa6";
import profilePic from "../../assets/profilePic.jpg";
import { FiLogOut } from "react-icons/fi";
import api from "../../Api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

export default function Sidebar() {
  const { user, setUser } = useAuth();

  const navigator = useNavigate();
  const handleLogout = () => {
    setTimeout(() => {
      api.post("/auth/logout");
      toast.promise(api.post("/auth/logout"), {
        loading: "Please wait....",
        success: () => {
            setUser({userID: null, name: "", email: ""});

            setTimeout(() => navigator("/"), 2500)

            return "Logged Out Successfully";
        },
        error: (err) => err.response?.data?.message
      })
      navigator("/");
    }, 2500);
  };

  return (
    <div className="w-[15%] min-h-screen bg-white">
      <a href="#" className="flex items-center mt-10 ml-5">
        <img src={logoImg} className="h-16 block" />
        <p className="poppins-semibold text-[#003B77] text-3xl">Habit</p>
        <p className="poppins-bold text-[#5AA50B] text-3xl">Forge</p>
      </a>

      <a className="ml-10 flex mt-10">
        <CiGrid42 size={40} className="mt-2" />
        <p className="text-2xl mt-3 ml-4">Dashboard</p>
      </a>

      <a className="ml-10 flex mt-10">
        <RiListCheck3 size={40} className="mt-2" />
        <p className="text-2xl mt-3 ml-5">My Habits</p>
      </a>

      <a className="ml-10 flex mt-10">
        <VscGraph size={40} className="mt-2" />
        <p className="text-2xl mt-3 ml-6">Analytics</p>
      </a>

      <a className="ml-10 flex mt-10">
        <FaGear size={40} className="mt-2" />
        <p className="text-2xl mt-3 ml-6">Settings</p>
      </a>

      <div className="flex bottom">
        <div className="absolute flex bottom-10 h-16 ml-2">
          <img src={profilePic} className="h-20 rounded-4xl" />
          <div>
            <p className="inter-para ml-5 mt-4 text-xl" style={{fontSize: "17px"}}>{user.name}</p>
            <p className="inter-para ml-5 text-gray-400 mt-1" style={{fontSize: "11px"}}>{user.email}</p>
          </div>
          <button onClick={handleLogout}>
            <FiLogOut className="mt-8 ml-4" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

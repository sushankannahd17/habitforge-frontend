import Search from "../Components/Habits/Search";
import AddHabit from "../Components/Main/AddHabit";
import Sidebar from "../Components/Navbar/SideBar";

export default function Habits() {
  return (
    <div className="min-h-screen w-full bg-[#F7F8FA] flex">
      <Sidebar />
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div className="pl-30 pt-10">
            <h1 className="text-3xl inter-heading">Manage Habits</h1>
            <p
              className="inter-para text-gray-400 mt-1"
              style={{ fontSize: "16px" }}
            >
              Create, edit, and organize your daily routines
            </p>
          </div>
          <AddHabit />
        </div>
        <div className="pl-30 pt-10 pr-30 w-full h-30">
            <Search />
        </div>
      </div>
    </div>
  );
}

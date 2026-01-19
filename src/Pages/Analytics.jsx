import CompletionRate from "../Components/Analytics/CompletionRate";
import TotalCompleted from "../Components/Analytics/TotalCompleted";
import TopHabits from "../Components/Analytics/TopHabits";
import ActivityHistory from "../Components/Analytics/ActivityHistory";
import Sidebar from "../Components/Navbar/SideBar";

export default function Analytics() {
  return (
    <div className="min-h-screen w-full bg-[#F7F8FA] flex">
      <Sidebar />
      <div className="w-full">
        <div className="flex items-start justify-between w-full">
          <div className="pl-30 pt-10">
            <h1 className="text-3xl inter-heading">Analytics</h1>
            <p
              className="inter-para text-gray-400 mt-1"
              style={{ fontSize: "16px" }}
            >
              Track your progress and spot trends
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <CompletionRate />
          <TotalCompleted />
        </div>
        <div>
          <ActivityHistory />
          <TopHabits />
        </div>
      </div>
    </div>
  );
}

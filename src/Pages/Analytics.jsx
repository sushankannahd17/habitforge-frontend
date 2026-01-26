import CompletionRate from "../Components/Analytics/CompletionRate";
import TotalCompleted from "../Components/Analytics/TotalCompleted";
import TopHabits from "../Components/Analytics/TopHabits";
import ActivityHistory from "../Components/Analytics/ActivityHistory";
import Sidebar from "../Components/Navbar/SideBar";
import PerfectDays from "../Components/Analytics/PerfectDays";
import MonthChoose from "../Components/Main/MonthChoose";
import StreakCount from "../Components/Analytics/StreakCount"

import { useState } from "react";

export default function Analytics() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2026)

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
            <MonthChoose month={month} year={year} setMonth={setMonth} setYear={setYear}/>
          </div>
        </div>
        <div className="flex gap-10">
          <CompletionRate month={month} year={year}/>
          <StreakCount />
          <TotalCompleted />
          <PerfectDays month={month} year={year}/>
        </div>
        <div>
          <ActivityHistory month={month} year={year}/>
          <TopHabits month={month} year={year}/>
        </div>
      </div>
    </div>
  );
}

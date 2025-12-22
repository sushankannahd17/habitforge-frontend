import { GoShieldCheck } from "react-icons/go";
import { FaListCheck } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { HiOutlineBell } from "react-icons/hi";
import { SlTrophy } from "react-icons/sl";
import "../../../Fonts.css";

export default function FeatureCard() {
  return (
    <>
    <div className="flex flex-grid-3 gap-32">
      <div className="h-80 w-1/4 bg-white ml-40 mt-20 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <GoShieldCheck
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">User & Security</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Secure account creation with encrypted data protection. Your
            personal growth journey starts private and safe.
          </p>
        </div>
      </div>
      <div className="h-80 w-1/4 bg-white mt-20 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <FaListCheck
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">Powerful Management</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Create unlimited habits, set priorities, organize by category, and customize schedules to fit your life.
          </p>
        </div>
      </div>
      <div className="h-80 w-1/4 bg-white mt-20 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <FaFire
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">Smart Tracking</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Log progress instantly. Our streak logic keeps you accountable and shows you exactly where you stand.
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-grid-3 gap-32">
      <div className="h-80 w-1/4 bg-white ml-40 mt-10 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <VscGraph 
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">Insights and Analytics</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Visual dashboards with weekly and monthly views help you spot patterns and optimize your routine.
          </p>
        </div>
      </div>
      <div className="h-80 w-1/4 bg-white mt-10 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <HiOutlineBell
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">Stay on Track</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Gentle notifications and email summaries ensure you never forget a habit, even on your busiest days.
          </p>
        </div>
      </div>
      <div className="h-80 w-1/4 bg-white mt-10 pt-1">
        <div className="w-full">
          <div className="h-14 bg-[#F0F4FF] w-1/9 ml-8 mt-10 pt-2 pl-3">
            <SlTrophy
              className=""
              style={{ color: "#4F6EF7", fontSize: "36px" }}
            />
          </div>
          <h1 className="inter-heading ml-8 mt-6 text-3xl">Gamification</h1>
          <p className="inter-para text-[#B1B4BC] w-full ml-8 pr-20 mt-4 text-xl">
            Earn badges for milestones, track your history, and export your data anytime. Making progress is fun.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

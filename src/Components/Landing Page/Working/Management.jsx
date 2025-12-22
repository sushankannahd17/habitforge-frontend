import { RiCheckboxCircleLine } from "react-icons/ri";
import ManagementImg from "../../../assets/Management.jpg"

export default function Management() {
  return (
    <div className="h-200 w-full bg-[#F3F4F6] pl-70 flex" id="working">
      <div className="w-[80%] flex-row lg:flex-col">
        <h1 className="text-[#5B6CFF] inter-heading pt-30">MANAGEMENT</h1>
        <h1 className="text-[#0F1724] inter-heading pt-3 text-5xl">
          Total control over your routine
        </h1>
        <p className="w-3/4 text-2xl pt-4">
          Organize your life with flexible habit settings. Whether it's a daily
          workout, a weekly reading goal, or a monthly audit, you can configure
          frequency, priority, and categories to match your needs.
        </p>
        <ul className="inter-para text-gray-600 mt-10">
          <li className="flex mb-4">
            <span className="mt-2 mr-2">
              <RiCheckboxCircleLine
                className=""
                style={{ color: "#4F6EF7", fontSize: "26px" }}
              />
            </span>
            <p className="text-xl mt-2">Custom frequencies & Schedules</p>
          </li>
          <li className="flex mb-4">
            <span className="mt-2 mr-2">
              <RiCheckboxCircleLine
                className=""
                style={{ color: "#4F6EF7", fontSize: "26px" }}
              />
            </span>
            <p className="text-xl mt-2">
              Categorize by Health, Work, or Personal
            </p>
          </li>
          <li className="flex mb-4">
            <span className="mt-2 mr-2">
              <RiCheckboxCircleLine
                className=""
                style={{ color: "#4F6EF7", fontSize: "26px" }}
              />
            </span>
            <p className="text-xl mt-2 font-bold">
              Archive or pause habits anytime
            </p>
          </li>
        </ul>
        <button
          className="w-1/5 h-12 border border-gray-500 rounded-md inter-para text-[#474D58] mt-4"
          style={{ fontSize: "16px" }}
        >
          Explore features
        </button>
      </div>
      <div className="w-3/4 mr-55 mt-30">
        <img src={ManagementImg} className="w-full"/>
      </div>
    </div>
  );
}

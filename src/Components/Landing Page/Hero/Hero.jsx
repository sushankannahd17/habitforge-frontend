import "../../../Fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HeroImage from "../../../assets/Hero.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigator = useNavigate();

  const tracking = () => {
    navigator("/register");
  };

  return (
    <div className="h-200 bg-[#F7F8FA]">
      <div className="flex justify-center">
        <div className="w-1/4 flex-col xl:flex-row mt-36 ml-58">
          <h1 className="inter-heading text-6xl">
            Build better habits, one day at a time.
          </h1>
          <p className="inter-para text-gray-400 mt-5 w-full">
            The simplest way to track your habits, visualize your progress, and
            build the life you want. No clutter, just focus
          </p>
          <ul className="inter-para text-gray-600 mt-10">
            <li className="flex mb-4">
              <span className="mt-2 mr-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 w-4 h-4"
                />
              </span>
              <p className="text-xl mt-2">
                Track daily habits with a single click
              </p>
            </li>
            <li className="flex mb-4">
              <span className="mt-2 mr-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 w-4 h-4"
                />
              </span>
              <p className="text-xl mt-2">Visualize your winning streaks</p>
            </li>
            <li className="flex mb-4">
              <span className="mt-2 mr-4">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-blue-600 w-4 h-4"
                />
              </span>
              <p className="text-xl mt-2">Stay motivated with insights</p>
            </li>
          </ul>
          <button
            className="h-16 w-1/2 border-white rounded-2xl bg-[#5B6CFF] text-white inter-para mt-5"
            onClick={tracking}
          >
            Start tracking for free
          </button>
        </div>
        <div className="w-1/2 ml-45">
          <img src={HeroImage} className="h-180 w-3/4 mt-10" />
        </div>
      </div>
    </div>
  );
}

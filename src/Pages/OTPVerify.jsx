import { useState } from "react";
import LogoImg from "../../public/logo.png";
import bgVideo from "../assets/bgVideo.webm";
import api from "../api"
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function OTPVerify() {
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigator = useNavigate()
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!otp) {
      toast("⚠️Enter the given OTP");
    }
    if (!newPassword) {
      toast("⚠️Enter the new password");
    }
    if (!confirmPassword) {
      toast("⚠️Enter the confirm password");
    }
    if (newPassword !== confirmPassword) {
        toast.error("New Password and Confirm Password must be same")
    }
    else {
      toast.promise(api.post("/auth/confirmOTP", { email, otp, password: newPassword }), {
        loading: "Loading, please wait",
        success: (res) => {
          navigator("/login", {state: {email}});

          return "Password Changed Successfully";
        },
        error: (err) => err.response?.data?.message,
      });
    }
  }

  return (
    <>
      <div className="min-h-screen w-full flex">
        <div className="w-1/2 lg: flex-col ml-33 pt-10">
          <a href="/" className="flex items-center">
            <img src={LogoImg} className="h-16 block" />
            <p className="poppins-semibold text-[#003B77] text-3xl mt-2">
              Habit
            </p>
            <p className="poppins-bold text-[#5AA50B] text-3xl mt-2">Forge</p>
          </a>
          <form onSubmit={handleSubmit}>
            <div className="w-full lg:w-2/3 bg-gray-400/30 mt-40 pt-10 h-150 ml-6 pr-4 flex items-start justify-center">
              <div className="pl-4 w-full">
                <h1 className="inter-heading text-4xl text-black text-center">
                  Verify OTP
                </h1>
                <p className="inter-para text-xl text-gray-400 mt-4 text-center">
                  Enter the OTP and new Password
                </p>
                <div className="email mt-10">
                  <label className="inter-para text-black">OTP</label>
                  <input
                    type="otp"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="XXXXXX"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <div className="email mt-6">
                  <label className="inter-para text-black">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="Enter your password"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <div className="email mt-6">
                  <label className="inter-para text-black">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="Enter your password"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="inter-para text-white mt-7 h-15 bg-[#5B6CFF] border-white rounded-md w-full"
                >
                  Change password
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-0 lg:w-8/9 h-0 lg:min-h-screen flex">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            source
            src={bgVideo}
          />
          <a
            className="absolute inter-para w-1/2 pt-12 ml-20 text-white text-right"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

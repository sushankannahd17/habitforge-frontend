import { useState } from "react";
import LogoImg from "../../public/logo.png";
import bgVideo from "../assets/bgVideo.webm";
import api from "../Api.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast("⚠️Enter your email");
    }
    else {
      toast.promise(api.post("/auth/genOTP", { email }), {
        loading: "Loading, please wait",
        success: (res) => {
          navigator("/verify-otp", {state: {email}});

          return "OTP sent Successfully";
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
            <div className="w-full lg:w-2/3 bg-gray-400/30 mt-40 pt-10 h-100 ml-6 pr-4 flex items-start justify-center">
              <div className="pl-4">
                <h1 className="inter-heading text-4xl text-black">
                  Forgot your password?
                </h1>
                <p className="inter-para text-xl text-gray-400 mt-4">
                  Enter your email
                </p>
                <div className="email mt-10">
                  <label className="inter-para text-black">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="name@example.com"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <button
                  type="submit"
                  className="inter-para text-white mt-7 h-15 bg-[#5B6CFF] border-white rounded-md w-full"
                >
                  Send OTP
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

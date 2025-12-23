import { useState } from "react";
import toast from "react-hot-toast";
import LogoImg from "../../public/logo.png";
import bgVideo from "../assets/bgVideo.webm";
import api from "../Api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name) {
      toast("⚠️ Enter your name");
    }

    if (!email) {
      toast("⚠️ Enter your email");
    }

    if (!password) {
      toast("⚠️ Enter your password");
    }

    if (name && email && password) {
      toast.promise(api.post("/auth/register", { name, email, password }), {
        loading: "Loading, please wait",
        success: (res) => {
          setTimeout(() => navigator("/login"), 2000);

          return "Account created successfully, redirecting you to login page";
        },
        error: (err) => err.response?.data?.message,
      });
    }
  };

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
          <form onSubmit={handleRegister}>
            <div className="w-full lg:w-8/9 bg-gray-400/30 mt-40 pt-10 h-180 pr-4 flex items-start justify-center">
              <div className="pl-4">
                <h1 className="inter-heading text-4xl text-black">
                  Create an account
                </h1>
                <p className="inter-para text-xl text-gray-400 mt-4">
                  Enter your email to create your account
                </p>
                <div className="email mt-10">
                  <label className="inter-para text-black">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="Your name"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <div className="email mt-6">
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
                <div className="email mt-6">
                  <label className="inter-para text-black">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block mt-3 h-12 inter-para pl-3 border border-gray-400 rounded-md w-full"
                    placeholder="Enter your password"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <button className="inter-para text-white mt-7 h-15 bg-[#5B6CFF] border-white rounded-md w-full">
                  Create your account
                </button>
                <p
                  className="text-center mt-6 inter-para text-gray-600"
                  style={{ fontSize: "15px" }}
                >
                  By clicking continue, you agree to our{" "}
                  <a className="text-[#5B6CFF]">Terms of Service </a> and{" "}
                  <a className="text-[#5B6CFF]">Privacy Policy</a>
                </p>
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

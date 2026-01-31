import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./Pages/Dashboard";
import Habits from "./Pages/Habits";
import Analytics from "./Pages/Analytics";
import ForgotPassword from "./Pages/ForgotPassword";
import OTPVerify from "./Pages/OTPVerify";
import Settings from "./Pages/Settings";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        containerStyle={{
          marginTop: "10px",
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/analytics" element={<Analytics />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/verify-otp" element={<OTPVerify />}/>
          <Route path="/settings" element={<Settings />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

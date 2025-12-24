import AuthContext from "../Contexts/AuthContext";
import { useState, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userID: sessionStorage.getItem("userID") || null,
    name: sessionStorage.getItem("Name") || "",
    email: sessionStorage.getItem("email") || ""
  });

  useEffect(() => {
    if (user.userID) {
      sessionStorage.setItem("Name", user.name);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("userID", user.userID);
    }

    if (!user.userID) {
      sessionStorage.removeItem("userID");
      sessionStorage.removeItem("Name");
      sessionStorage.removeItem("email");
    }
  }, [user.userID, user.name, user.email]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import AuthContext from "../Contexts/AuthContext";
import { useState, useEffect } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    userID: sessionStorage.getItem("userID") || null,
  });

  useEffect(() => {
    if (user.userID) {
      sessionStorage.setItem("userID", user.userID);
    }

    if (!user.userID) {
      sessionStorage.removeItem("userID");
    }
  }, [user.userID, user.name, user.email]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

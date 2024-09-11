import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || "",
    isAuthenticated: false,
    isAdmin: localStorage.getItem("isAdmin") || false, // Store and retrieve admin status
  });

  useEffect(() => {
    if (auth.token) {
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: true,
      }));
    } else {
      setAuth((prevState) => ({
        ...prevState,
        isAuthenticated: false,
      }));
    }
  }, [auth.token]);

  const saveToken = (token, isAdmin) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin)); // Store admin status in localStorage
    setAuth((prevState) => ({
      ...prevState,
      token,
      isAdmin, // Update admin status in context
    }));
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

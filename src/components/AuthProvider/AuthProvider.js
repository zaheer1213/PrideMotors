import React, { createContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || "",
    isAuthenticated: false,
  });

  // Update the authentication state when the token changes
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

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setAuth((prevState) => ({
      ...prevState,
      token,
    }));
  };

  return (
    <AuthContext.Provider value={{ auth, saveToken }}>
      {children}
    </AuthContext.Provider>
  );
};

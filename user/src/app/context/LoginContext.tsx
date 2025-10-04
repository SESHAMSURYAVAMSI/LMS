// app/context/LoginContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LoginContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export function LoginProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Keep state in sync with localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    localStorage.setItem("token", "loggedin");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must be used inside LoginProvider");
  return context;
}


// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface LoginContextType {
//   isLoggedIn: boolean;
//   login: () => void;
//   logout: () => void;
// }

// const LoginContext = createContext<LoginContextType | undefined>(undefined);

// export const LoginProvider = ({ children }: { children: ReactNode }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("isLoggedIn") === "true";
//     }
//     return false;
//   });

//   const login = () => {
//     setIsLoggedIn(true);
//     if (typeof window !== "undefined") {
//       localStorage.setItem("isLoggedIn", "true");
//     }
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     if (typeof window !== "undefined") {
//       localStorage.removeItem("isLoggedIn");
//     }
//   };

//   return (
//     <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

// export const useLogin = () => {
//   const context = useContext(LoginContext);
//   if (!context) {
//     throw new Error("useLogin must be used within a LoginProvider");
//   }
//   return context;
// };
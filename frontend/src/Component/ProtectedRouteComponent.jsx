import { Navigate,Outlet } from "react-router-dom"

import UserChatComponent from "./user/UserChatComponent";

import axios from "axios";
import React, { useEffect, useState } from "react";

import LoginPage from "../pages/LoginPage";




const ProtectedRouteComponent = ({admin}) => {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
     axios.get("/api/get-token").then(function (data) {
         if (data.data.token) {
             setIsAuth(data.data.token);
         }
         return isAuth;
     }) 
  }, [isAuth])

  if (isAuth === undefined) return <LoginPage />;

  return isAuth && admin && isAuth !== "admin" ? (
       <Navigate to="/login" />
  ) : isAuth && admin ? (
      <Outlet />
  ) : isAuth && !admin ? (
      <>
      <UserChatComponent />
      <Outlet />
      </>
  ) : (
       <Navigate to="/login" />
  )
    
    
}

export default ProtectedRouteComponent
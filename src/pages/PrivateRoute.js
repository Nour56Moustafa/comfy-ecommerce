import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const PrivateRoute = () => {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;

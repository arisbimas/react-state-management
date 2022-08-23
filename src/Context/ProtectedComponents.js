import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import { UserContext } from "./AppContext";

const ProtectedComponents = () => {
  const { user } = UserContext();
  const location = useLocation();

  console.log("from protected=>", user);

  return user?.name ? (
    <Outlet />
  ) : (
    <Navigate to="" state={{ from: location }} replace />
  );
};

export default ProtectedComponents;

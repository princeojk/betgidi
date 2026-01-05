import { Navigate } from "react-router-dom";
// import { useAuth } from "./auth/authContextHook";
import React from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //   const { user } = useAuth();

  const user = "ss";
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

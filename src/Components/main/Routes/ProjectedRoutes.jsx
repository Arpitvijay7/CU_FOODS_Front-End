import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoutes = ({
  isAuthenticated,
  children,
  loading,
}) => {
  const location = useLocation();
  if (isAuthenticated) {
    return <>{!loading && (children ? children : <Outlet />)}</>;
  }
  console.log(location.pathname);

  return !(loading) ? (
     <Navigate to="/?notauth=true" />
  ) : (
    <Navigate to={location.pathname} />
  );
};

export default ProtectedRoutes;
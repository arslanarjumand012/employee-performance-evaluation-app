import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { URL } from "../../../constants";

const UserPublicRoutes = () => {
  const authenticated = true;
  const isAdmin = false;

  return authenticated ? (
    isAdmin ? (
      <Navigate to={URL.DASHBOARD.ADMIN.HOME.BASE} />
    ) : (
      <Navigate to={URL.DASHBOARD.USER.HOME.BASE} />
    )
  ) : (
    <Outlet />
  );
};

export default UserPublicRoutes;

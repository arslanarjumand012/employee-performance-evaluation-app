import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { URL } from "../../../constants";

const UserPrivateRoutes = () => {
  const authenticated = true;
  const isAdmin = false;
  const token = "token";

  return authenticated && !isAdmin ? (
    <Outlet />
  ) : !token ? (
    <Navigate to={URL.HOME.BASE} />
  ) : (
    <Navigate to={URL.NOT_FOUND_PAGE} />
  );
};

export default UserPrivateRoutes;

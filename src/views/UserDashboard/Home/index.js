import React, { useEffect } from "react";
import Layout from "../../../layout";
import { MESSAGE, URL } from "../../../constants";
import { toastSuccess } from "../../../api/integrations/Toaster";

const UserDashboardHome = () => {
  useEffect(() => {
    toastSuccess(MESSAGE.LOGIN_SUCCESS);
  }, []);

  return (
    <Layout route={URL.DASHBOARD.USER.HOME.ROUTE}>UserDashboardHome</Layout>
  );
};

export default UserDashboardHome;

import React from 'react';
import Layout from '../../layout';
import { APP_ROLES, URL } from '../../constants';

const DashboardSetting = () => {
  const role = APP_ROLES.USER;

  return (
    <Layout
      layout={role}
      route={
        role === APP_ROLES.USER
          ? URL.DASHBOARD.USER.SETTING.ROUTE
          : URL.DASHBOARD.ADMIN.SETTING.ROUTE
      }
    >
      DashboardSetting
    </Layout>
  );
};

export default DashboardSetting;

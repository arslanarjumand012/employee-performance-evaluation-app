import React from 'react';
import Layout from '../../../layout';
import { APP_ROLES, URL } from '../../../constants';

const AdminDashboardHome = () => {
  return (
    <Layout route={URL.DASHBOARD.ADMIN.HOME.ROUTE} layout={APP_ROLES.ADMIN}>
      AdminDashboardHome
    </Layout>
  );
};

export default AdminDashboardHome;

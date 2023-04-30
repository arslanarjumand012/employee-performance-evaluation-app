import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LOCAL_STORAGE_KEY, THEME_MODE, URL } from '../constants';
import { useTheme } from '../theme';
import AdminPrivateRoutes from './Admin/Private';
import UserPrivateRoutes from './User/Private';
import UserPublicRoutes from './User/Public';

const Toaster = lazy(() => import('../components/Toaster'));
const Login = lazy(() => import('../views/Login'));
const NotPageFound = lazy(() => import('../views/NotPageFound'));
const UserDashboardHome = lazy(() => import('../views/UserDashboard/Home'));
const DashboardSetting = lazy(() => import('../views/DashboardSetting'));
const AdminDashboardHome = lazy(() => import('../views/AdminDashboard/Home'));

const MainRouter = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === THEME_MODE.DARK) {
      document.documentElement.classList.add(THEME_MODE.DARK);
    } else {
      document.documentElement.classList.remove(THEME_MODE.DARK);
    }

    localStorage.setItem(LOCAL_STORAGE_KEY.THEME, theme);
  }, [theme]);

  return (
    <>
      <Routes>
        {/* Admin Private Routes */}
        <Route path={URL.DASHBOARD.ADMIN.HOME.BASE} element={<AdminPrivateRoutes />}>
          <Route path={URL.DASHBOARD.ADMIN.HOME.BASE} element={<AdminDashboardHome />} />
          <Route path={URL.DASHBOARD.ADMIN.SETTING.BASE} element={<DashboardSetting />} />
        </Route>

        {/* User Private Routes */}
        <Route path={URL.DASHBOARD.USER.HOME.BASE} element={<UserPrivateRoutes />}>
          <Route path={URL.DASHBOARD.USER.HOME.BASE} element={<UserDashboardHome />} />
          <Route path={URL.DASHBOARD.USER.SETTING.BASE} element={<DashboardSetting />} />
        </Route>

        {/* User Public Routes */}
        <Route path={URL.HOME.BASE} element={<UserPublicRoutes />}>
          <Route path={URL.HOME.BASE} element={<Login />} />
        </Route>

        {/* Not Found Route */}
        <Route path={URL.NOT_FOUND_PAGE} element={<NotPageFound />} />
      </Routes>

      <Toaster />
    </>
  );
};

export default MainRouter;

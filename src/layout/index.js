import React, { lazy, useState } from "react";
import { useTheme } from "../theme";
import {
  ADMIN_NAV_LIST,
  APP_ROLES,
  THEME_MODE,
  URL,
  USER_NAV_LIST,
} from "../constants";
import UserLogo from "../assets/images/user-logo.png";

const MenuItem = lazy(() => import("./components/MenuItem"));
const DarkModeSwitch = lazy(() => import("../components/DarkModeSwitch"));

const Layout = ({ children, route = URL.HOME, layout = APP_ROLES.USER }) => {
  const { theme } = useTheme();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen bg-white`}>
      <div
        className={`py-10 pt-20 border-r md:w-72 md:block md:fixed md:inset-y-0 md:left-0 transition-all duration-200 transform translate-x-0 overflow-y-auto ${
          sidebarOpen
            ? "translate-x-0 ease-out transition-medium"
            : "-translate-x-full ease-in"
        } ${
          theme === THEME_MODE.DARK
            ? "bg-gray-900 text-white hover:text-gray-200"
            : "bg-gray-100 text-gray-600 hover:text-gray-800 border-gray-300"
        } transform md:transform-none transition-transform duration-200 ease-in-out z-30 w-full h-full overflow-auto md:sticky md:top-0`}
      >
        <div className="absolute top-5 left-5 transition-all">
          <DarkModeSwitch />
        </div>
        <div className="w-full">
          <img
            src={UserLogo}
            // src={user && user.avatar ? user.avatar : UserLogo}
            className={`${
              theme === THEME_MODE.DARK ? "border-gray-400" : "border-gray-700"
            } cursor-default w-[150px] h-[150px] mx-auto object-top object-cover duration-500 rounded-full border-4`}
            alt="user-logo"
          />
          <h1
            className={`${
              theme === THEME_MODE.DARK ? "text-white" : "text-gray-700"
            } origin-left font-medium text-xl text-center duration-200 break-words mt-5`}
          >
            Arslan Arjumand
            {/* {user ? user.fullName : "-"} */}
          </h1>
          <p
            className={`${
              theme === THEME_MODE.DARK ? "text-gray-400" : "text-gray-700"
            } origin-left font-medium text-md text-center duration-200 break-words mt-1`}
          >
            (Senior Software Engineer)
            {/* {user ? user.designation : "-"} */}
          </p>
        </div>
        <nav className="mt-4">
          <ul className="px-5 pt-3">
            {layout === APP_ROLES.USER
              ? USER_NAV_LIST(layout, route).map((menu) => (
                  <MenuItem key={menu.id} menu={menu} />
                ))
              : ""}
            {layout === APP_ROLES.ADMIN
              ? ADMIN_NAV_LIST(layout, route).map((menu) => (
                  <MenuItem key={menu.id} menu={menu} />
                ))
              : ""}
          </ul>
        </nav>
      </div>

      <div className="relative min-h-screen md:flex md:flex-col md:flex-auto md:w-0 flex-grow">
        <div className="md:hidden p-2 text-gray-500 hover:text-gray-600">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <i className="text-3xl text-gray-900 fal fa-signal-4 fa-rotate-270"></i>
          </button>
        </div>
        <main
          className={`p-4 flex-grow bg-white h-screen overflow-y-auto text-gray-600`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

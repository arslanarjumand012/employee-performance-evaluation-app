import React from "react";
import { useTheme } from "../../../theme";
import { useNavigate } from "react-router-dom";
import { THEME_MODE, URL } from "../../../constants";

const MenuItem = ({ menu }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const onNavigateRoutes = (route, name) => {
    if (route === URL.HOME.BASE && name === URL.LOGOUT.ROUTE)
      return onLoggingOut(route);
    else return navigate(route);
  };

  const onLoggingOut = (route) => {
    navigate(route);
  };

  return (
    <li
      className={`flex rounded-md p-2 cursor-pointer hover:bg-gray-700 hover:text-white text-sm items-center gap-x-4 ${
        menu.gap ? "mt-9" : "mt-2"
      } ${
        menu.active
          ? theme === THEME_MODE.DARK
            ? "bg-gray-700 text-white"
            : "bg-gray-700 text-white"
          : theme === THEME_MODE.DARK
          ? "text-white"
          : "text-gray-700"
      }`}
      onClick={() => onNavigateRoutes(menu.route, menu.name)}
    >
      <span className="flex items-center space-x-4 px-4 py-2 rounded-lg">
        <i className={`text-lg ${menu.icon}`}></i>
        <span className="text-md">{menu.name}</span>
      </span>
    </li>
  );
};

export default MenuItem;

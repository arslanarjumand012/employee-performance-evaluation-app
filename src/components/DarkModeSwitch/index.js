import React from "react";
import { useTheme } from "../../theme";
import { THEME_MODE } from "../../constants";

const DarkModeSwitch = ({ label }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`transition duration-500 ease-in-out rounded-full px-3 py-2 ${
        theme === THEME_MODE.DARK ? "bg-white" : "bg-gray-800"
      }`}
      onClick={toggleTheme}
    >
      <span className={theme === THEME_MODE.DARK ? "text-black" : "text-white"}>
        {label ? `${label} - ` : ""}
      </span>
      {theme === THEME_MODE.DARK ? (
        <i className="fas fa-sun text-black"></i>
      ) : (
        <i className="fas fa-moon text-white"></i>
      )}
    </button>
  );
};

export default DarkModeSwitch;

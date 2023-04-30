import { createContext, useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY, THEME_MODE } from "../constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY.THEME) || THEME_MODE.LIGHT
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.THEME, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME_MODE.LIGHT ? THEME_MODE.DARK : THEME_MODE.LIGHT
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

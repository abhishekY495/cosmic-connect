import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({ children }) => {
  const defaultTheme = { darkMode: false };
  const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", JSON.stringify(defaultTheme));
    } else {
      return JSON.parse(theme);
    }
  };

  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (theme.darkMode) {
      setTheme({ darkMode: false });
    } else {
      setTheme({ darkMode: true });
    }
  };

  useEffect(() => {
    const updateTheme = () => {
      localStorage.setItem("theme", JSON.stringify(theme));
    };
    updateTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

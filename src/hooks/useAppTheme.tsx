import { useEffect, useState } from "react";

export const useAppTheme = () => {
  const THEMES = {
    light: "light",
    dark: "dark",
  };
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleSwitchTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector('html')?.classList.add(THEMES.dark)
    } else {
      document.querySelector('html')?.classList.remove(THEMES.dark)
    }
  }, [isDarkMode])

  return {
    isDarkMode,
    setIsDarkMode,
    handleSwitchTheme,
  };
};

import React from "react";
import { LightModeIcon, DarkModeIcon } from "@assets/icons";

export function ThemeSwitch() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ?? "light"
  );

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button onClick={handleTheme}>
      {theme === "light" ? (
        <LightModeIcon fill="#374151" />
      ) : (
        <DarkModeIcon fill="#94a3b8" />
      )}
    </button>
  );
}

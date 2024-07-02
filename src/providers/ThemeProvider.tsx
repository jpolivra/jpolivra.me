import React, { useMemo, useState } from "react";
import { ThemeContext } from "@contexts/ThemeContext";
import type { Theme } from "@models/ThemeModels";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const value = useMemo(() => ({ theme, handleTheme }), [theme, handleTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

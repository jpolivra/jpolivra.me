import { useContext, createContext } from "react";
import type { Theme } from "@models/ThemeModels";

export const ThemeContext = createContext<{
  theme: Theme;
  handleTheme: () => void;
}>({ theme: "light", handleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

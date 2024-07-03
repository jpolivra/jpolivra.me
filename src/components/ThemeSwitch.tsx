import { useTheme } from "@contexts/ThemeContext";

export function ThemeSwitch() {
  const { theme, handleTheme } = useTheme();

  return <button onClick={handleTheme}>Theme {theme}</button>;
}

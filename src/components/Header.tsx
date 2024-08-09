import { Link } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";
import { LogoIcon } from "@assets/icons";

export function Header() {
  return (
    <header className="flex justify-between align-middle">
      <Link to={"/"} className="fixed m-5">
        <LogoIcon width={48} height={48} />
      </Link>
      <section className="flex justify-end gap-5 w-full p-8">
        <Link to={"/blog"}>
          <button className="text-gray-700 dark:text-slate-400">Blog</button>
        </Link>
        <ThemeSwitch />
      </section>
    </header>
  );
}

import { Link } from "react-router-dom";
import { ThemeSwitch } from "./ThemeSwitch";
import { LogoIcon } from "@assets/LogoIcon";

export function Header() {
  return (
    <header className="p-8 flex justify-between align-middle">
      <div className="dark:[&>svg>path]:fill-slate-400 [&>svg>path]:fill-slate-600">
        <LogoIcon width={48} height={48} />
      </div>
      <section className="flex gap-5">
        <Link to={"/blog"}>
          <button className="text-gray-700 dark:text-slate-400">Blog</button>
        </Link>
        <ThemeSwitch />
      </section>
    </header>
  );
}

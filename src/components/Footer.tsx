import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full flex justify-center text-sm px-7">
      <Link
        to={"https://creativecommons.org/licenses/by-nc-sa/4.0/"}
        className="underline mr-1 opacity-40 transition duration-200 hover:opacity-100 hover:text-[#FF8E3C]"
      >
        {"CC BY-NC-SA 4.0"}
      </Link>
      <span className="mr-1 opacity-40">{"2024-PRESENT © João Oliveira"}</span>
    </footer>
  );
}

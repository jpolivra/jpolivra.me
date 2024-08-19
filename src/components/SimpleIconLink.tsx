import { Link } from "react-router-dom";

export function SimpleIconLink({
  url,
  icon,
  title,
}: Readonly<{ url: string; icon: string; title: string }>) {
  return (
    <Link
      to={url}
      target="_blank"
      className="border-b-[1px] border-gray-700 transition-colors hover:border-host-orange-10 hover:text-host-orange-10"
    >
      <span className={`opacity-75 ${icon}`}></span>
      {` ${title}`}
    </Link>
  );
}

import { Link } from "react-router-dom";

export function TagLink({
  url,
  iconUrl,
  title,
}: Readonly<{ url: string; iconUrl: string; title: string }>) {
  return (
    <Link
      to={url}
      target="_blank"
      className="inline-flex gap-1 items-center bg-[#8882] px-1.5 py-1 rounded font-roboto leading-[100%] markdown-magic-link"
    >
      <span
        className="markdown-magic-link-image"
        style={{
          backgroundImage: `url(${iconUrl}`,
        }}
      />
      {title}
    </Link>
  );
}

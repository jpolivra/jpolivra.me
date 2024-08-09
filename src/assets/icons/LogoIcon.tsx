import { SVGProps } from "react";

export function LogoIcon(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      <circle cx="60" cy="60" r="40" fill="#FF8E3C" />
      <circle cx="140" cy="140" r="40" fill="#FF8E3C" />
      <circle cx="140" cy="60" r="40" fill="#FF8E3C" fillOpacity="0.8" />
      <circle cx="60" cy="140" r="40" fill="#FF8E3C" fillOpacity="0.8" />
    </svg>
  );
}

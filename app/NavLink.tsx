"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const active = href === "/" + pathName.split("/")[1];
  return (
    <Link className={active ? "text-sky-500" : ""} href={href}>
      {children}
    </Link>
  );
}

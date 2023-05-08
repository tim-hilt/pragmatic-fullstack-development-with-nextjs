"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const getStatus = (href: string): string => {
  const s = href.split("/");
  return s[s.length - 1];
};

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { status } = useParams();
  const active = status === getStatus(href);
  return (
    <Link className={(active ? "bg-slate-300 " : "") + "px-3 py-2"} href={href}>
      {children}
    </Link>
  );
}

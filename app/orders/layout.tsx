import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen border-r bg-slate-100">
        <h1 className="text-2xl mb-1 p-2">Status</h1>
        <NavLink href={"/orders/draft"}>Entwurf</NavLink>
        <NavLink href={"/orders/ready"}>Bereit zur Planung</NavLink>
        <NavLink href={"/orders/planned"}>Eingeplant</NavLink>
        <NavLink href={"/orders/running"}>In Bearbeitung</NavLink>
        <NavLink href={"/orders/completed"}>Abgeschlossen</NavLink>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

import "./globals.css";
import NavLink from "./NavLink";

export const metadata = {
  title: "Kronos",
};

function Nav() {
  return (
    <nav className="flex text-white bg-black p-4">
      <div className="grow">KRONOS</div>
      <div className="space-x-5">
        <NavLink href={"/orders"}>Aufträge</NavLink>
        <NavLink href={"/planner"}>Operations Board</NavLink>
        <NavLink href={"/administration"}>Einstellungen</NavLink>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookAIcon, Home, PersonStandingIcon, Search } from "lucide-react";

type MobileNavbarProps = {};

const MobileNavbar: React.FC<MobileNavbarProps> = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Home",
      path: "/",
      icon: <Home className="h-4 w-4" />,
      active: pathname === "/",
    },
    {
      label: "Library",
      path: "/series/x",
      icon: <BookAIcon className="h-4 w-4" />,
      active: pathname === "/series/x",
    },

    {
      label: "Search",
      path: "/search",
      icon: <Search className="h-4 w-4" />,
      active: pathname === "/search",
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <PersonStandingIcon className="h-4 w-4" />,
      active: pathname === "/profile",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 mt-auto w-full flex justify-around gap-4 py-6 px-8 bg-gray-900">
      {routes.map((route, index) => (
        <Link
          href={route.path}
          className={`${
            route.active && "text-red-600 cursor-auto"
          } flex flex-col items-center gap-1`}
          key={index}
        >
          {route.icon}
          <p className="text-xs">{route.label}</p>
        </Link>
      ))}
    </div>
  );
};
export default MobileNavbar;

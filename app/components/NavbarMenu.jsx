"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

let links = [
  { href: "/", label: "Inicio" },
  { href: "/stock", label: "Nuestro stock" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/encuentranos", label: "Encuentranos" },
  { href: "/nuestro-equipo", label: "Nuestro equipo" },
];

export const NavbarMenu = () => {
  const pathname = usePathname();

  links = links.map((link) => {
    if (link?.href === pathname) {
      return { ...link, active: true };
    } else {
      return { ...link, active: false };
    }
  });

  return (
    <div className="flex space-x-6 font-[500]">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={link.active ? "text-primary" : " hover:text-primary/75"}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

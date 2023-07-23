"use client";

import { Container } from "./Container";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/stock", label: "Nuestro stock" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/nuestro-equipo", label: "Nuestro equipo" },
  { href: "/contacto", label: "Contacto" },
];

export const NavBanner = () => {
  const pathname = usePathname();

  const activeLink = links.find((link) => link.href === pathname);

  return (
    <Container className="h-[calc(340px-96px)] flex flex-col justify-center">
      <h1 className="text-4xl font-semibold mb-2">{activeLink.label}</h1>
      <h1 className="text-lg">
        <Link
          href="/"
          className="hover:text-primary transition-all duration-200"
        >
          Inicio
        </Link>{" "}
        / {activeLink.label}
      </h1>
    </Container>
  );
};

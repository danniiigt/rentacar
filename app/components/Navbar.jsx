"use client";

import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

let links = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/encuentranos", label: "Encuentranos" },
  { href: "/nuestro-equipo", label: "Nuestro equipo" },
];

export const Navbar = () => {
  const pathname = usePathname();

  links = links.map((link) => {
    if (link?.href === pathname) {
      return { ...link, active: true };
    } else {
      return { ...link, active: false };
    }
  });

  return (
    <Container>
      <header className="flex justify-between items-center h-24 py-2">
        <Logo className="h-[60px] w-[60px]" />

        <div className="flex space-x-6 font-[500]">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className={
                link.active ? "text-primary" : " hover:text-primary/75"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-x-2">
          <Button
            variant="text"
            className="text-md hover:text-primary py-6"
            asChild
          >
            <Link href="/login">Acceder</Link>
          </Button>
          <Button className="shadow-lg shadow-primary/50 py-6 text-md" asChild>
            <Link href="/registro">Registrarme</Link>
          </Button>
        </div>
      </header>
    </Container>
  );
};

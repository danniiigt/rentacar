import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Container>
      <header className="flex justify-between items-center h-24 py-2">
        <Logo className="h-[60px] w-[60px]" />

        <div className="flex space-x-6 font-[500]">
          <Link href="/">Inicio</Link>
          <Link href="/catalogo">Catálogo</Link>
          <Link href="/acerca-de">Acerca de</Link>
          <Link href="/encuentranos">Encuentranos</Link>
          <Link href="/nuestro-equipo">Nuestro equipo</Link>
        </div>

        <div className="space-x-2">
          <Button variant="text" className="text-md py-6">
            Acceder
          </Button>
          <Button className="shadow-lg shadow-primary/50 py-6 text-md">
            Registrarme
          </Button>
        </div>
      </header>
    </Container>
  );
};

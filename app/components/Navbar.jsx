import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { NavbarButtons } from "./NavbarButtons";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  return (
    <Container>
      <header className="flex justify-between items-center h-24 py-2">
        <Logo />
        <NavbarMenu />
        <NavbarButtons />
      </header>
    </Container>
  );
};

import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { SignOutButton } from "./SignOutButton";
import Link from "next/link";

export const NavbarButtons = async () => {
  const session = await getServerSession();

  if (session)
    return (
      <div className="space-x-2">
        <SignOutButton />
        <Button
          className="shadow-lg shadow-primary/50 py-6 text-md rounded"
          asChild
        >
          <Link href="/stock">Ver Stock</Link>
        </Button>
      </div>
    );

  return (
    <div className="space-x-2">
      <Button
        variant="text"
        className="text-md hover:text-primary py-6"
        asChild
      >
        <Link href="/login">Acceder</Link>
      </Button>
      <Button
        className="shadow-lg shadow-primary/50 py-6 text-md rounded"
        asChild
      >
        <Link href="/registro">Registrarme</Link>
      </Button>
    </div>
  );
};

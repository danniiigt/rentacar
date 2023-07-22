"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <Button
      onClick={signOut}
      variant="text"
      className="text-md hover:text-primary py-6"
    >
      Cerrar sesión
    </Button>
  );
};

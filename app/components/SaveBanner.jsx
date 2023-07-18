import { Container } from "@/components/shared/Container";
import React from "react";

export const SaveBanner = () => {
  return (
    <section className="bg-white">
      <Container className="h-40 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">
          ¡Los mejores coches de alquiler a un precio económico!
        </h1>
        <h1>
          En toda la{" "}
          <span className="text-primary font-semibold">península</span>.
          Proveedores{" "}
          <span className="text-primary font-semibold">locales</span>. Soporte
          las <span className="text-primary font-semibold">24</span> horas, los{" "}
          <span className="text-primary font-semibold">7</span> días de la
          semana.
        </h1>
      </Container>
    </section>
  );
};

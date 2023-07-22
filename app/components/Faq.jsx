import { Container } from "@/components/shared/Container";
import { FaqAccordion } from "./FaqAccordion";

export const Faq = () => {
  return (
    <Container className="py-24">
      <header className="text-center">
        <div className="mb-4">
          <h1 className="text-2xl underline decoration-primary">FAQ</h1>
          <h1 className="text-3xl font-semibold">Preguntas frecuentes</h1>
        </div>

        <p className="text-muted-foreground mx-auto max-w-[600px]">
          Preguntas Frecuentes Sobre el Proceso de Reserva de Alquiler de Coches
          en nuestro sitio web: Respuestas a Inquietudes y Consultas Comunes.
        </p>
      </header>

      <main className="max-w-3xl mx-auto mt-12">
        <FaqAccordion />
      </main>
    </Container>
  );
};

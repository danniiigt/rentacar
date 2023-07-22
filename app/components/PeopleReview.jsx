import { Container } from "@/components/shared/Container";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import React from "react";

export const PeopleReview = () => {
  return (
    <div className="w-full bg-white py-24">
      <Container>
        <header className="text-center">
          <div className="mb-4">
            <h1 className="text-2xl underline decoration-primary">
              La opinión de la gente
            </h1>
            <h1 className="text-3xl font-semibold">
              Testimonios de nuestros clientes
            </h1>
          </div>

          <p className="text-muted-foreground mx-auto max-w-[600px]">
            Descubre cómo nuestras soluciones de alquiler de coches han
            enriquecido las aventuras de nuestros clientes y han superado sus
            expectativas. ¡Únete a la comunidad de clientes satisfechos y vive
            una experiencia de alquiler inigualable con nosotros!
          </p>
        </header>

        <main className="grid grid-cols-2 gap-8 mt-12">
          <Card className="border-none bg-background rounded-none shadow">
            <CardContent className="p-9 border-none">
              <p className="text-2xl">
                "Nos decidimos por alquilar un coche y dimos con Rentacar ¡y fue
                una experiencia asombrosa! La reserva fue rápida y los precios
                de alquiler fueron sumamente accesibles."
              </p>
            </CardContent>
            <CardFooter className="p-9 pt-0">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/client-1.jpg"
                    alt="user-image"
                    width={60}
                    height={60}
                    className="rounded-full aspect-square object-cover"
                  />

                  <div>
                    <h1 className="font-semibold">Daniel González</h1>
                    <p className="text-muted-foreground">Murcia</p>
                  </div>
                </div>

                <Icons.quote className="h-12 w-12 text-primary" />
              </div>
            </CardFooter>
          </Card>
          <Card className="border-none bg-background rounded-none flex flex-col justify-between shadow">
            <CardContent className="p-9 border-none">
              <p className="text-2xl">
                "El coche estaba en excelente estado e hizo que nuestro viaje
                fuese aún mejor. Hemos quedado muy contentos con el servicio de
                Rentacar y volveremos a alquilar con ellos sin duda."
              </p>
            </CardContent>
            <CardFooter className="p-9 pt-0">
              <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/client-2.jpg"
                    alt="user-image"
                    width={60}
                    height={60}
                    className="rounded-full aspect-square object-cover"
                  />

                  <div>
                    <h1 className="font-semibold">Alberto Guillén</h1>
                    <p className="text-muted-foreground">Madrid</p>
                  </div>
                </div>

                <Icons.quote className="h-12 w-12 text-primary" />
              </div>
            </CardFooter>
          </Card>
        </main>
      </Container>
    </div>
  );
};

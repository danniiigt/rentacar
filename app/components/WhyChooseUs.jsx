import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

export const WhyChooseUs = () => {
  return (
    <div className="w-full h-fit bg-[url('https://car-rental-ten.vercel.app/static/media/bg.82b3bf0dc76cd35f3da0.png')] bg-top bg-cover bg-no-repeat">
      <Container className="py-24">
        <Image
          src="https://car-rental-ten.vercel.app/static/media/main.70cd75042bdf42515d92.png"
          alt="banner"
          width={1080}
          height={600}
          className="w-[90%] mx-auto h-fit object-cover"
        />

        <div className="grid grid-cols-2 gap-16 mt-8">
          <section>
            <header className="mb-6">
              <h1 className="text-2xl underline decoration-primary">
                ¿Porqué nosotros?
              </h1>
              <h1
                className="text-4xl font-semibold"
                style={{
                  textWrap: "pretty",
                }}
              >
                Las mejores ofertas las encontrarás aquí
              </h1>
            </header>
            <main className="mb-6">
              <p
                className="text-muted-foreground max-w-[500px]"
                style={{ textWrap: "balance" }}
              >
                Descubre las mejores ofertas que jamás encontrarás con nuestras
                inigualables promociones. Estamos comprometidos en brindarte el
                mejor valor por tu dinero, para que disfrutes de servicios y
                productos de primera calidad sin arruinar tu presupuesto.
                Nuestras ofertas están diseñadas para brindarte la experiencia
                de alquiler definitiva, así que no te pierdas la oportunidad de
                ahorrar en grande.
              </p>
            </main>
            <footer>
              <Button className="shadow-xl shadow-primary/25 rounded px-4 h-14">
                Encuentra ofertas
                <Icons.chevronRight className="ml-2" />
              </Button>
            </footer>
          </section>

          <section className="space-y-8">
            <article className="flex items-center gap-x-6">
              <Image
                src="/images/why-choose-us-1.png"
                alt="icon-img"
                width={128}
                height={128}
              />

              <div>
                <h1 className="text-xl font-semibold">
                  Viaje a través del país
                </h1>
                <p className="text-muted-foreground">
                  Lleva tu experiencia de conducción al siguiente nivel con
                  nuestros vehículos de primera categoría para tus aventuras a
                  través del país.
                </p>
              </div>
            </article>
            <article className="flex items-center gap-x-6">
              <Image
                src="/images/why-choose-us-2.png"
                alt="icon-img"
                width={128}
                height={128}
              />

              <div>
                <h1 className="text-xl font-semibold">Tarifas Todo Incluido</h1>
                <p className="text-muted-foreground">
                  Obtén todo lo que necesitas en un solo precio conveniente y
                  transparente con nuestra política de tarifas todo incluido.
                </p>
              </div>
            </article>
            <article className="flex items-center gap-x-6">
              <Image
                src="/images/why-choose-us-3.png"
                alt="icon-img"
                width={128}
                height={128}
              />

              <div>
                <h1 className="text-xl font-semibold">
                  Sin Cargos Extra/Ocultos
                </h1>
                <p className="text-muted-foreground">
                  Disfruta de tranquilidad con nuestra política de no tener
                  cargos ocultos ni extra. Creemos en una política de precios
                  transparente y honesta.
                </p>
              </div>
            </article>
          </section>
        </div>
      </Container>
    </div>
  );
};

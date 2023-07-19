import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const MainBanner = () => {
  return (
    <Container>
      <div className="h-[calc(92vh-96px)] flex items-center z-10">
        <div className="flex">
          <div className="w-[37.5%]">
            <div>
              <h3 className="text-2xl mb-4">Planea tu viaje ahora</h3>
              <h1
                className="text-6xl font-bold mb-6"
                style={{
                  textWrap: "balance",
                }}
              >
                Elige el coche que{" "}
                <span className="text-primary">mejor se adapte</span> a ti
              </h1>
              <p
                className="text-muted-foreground font-light max-w-[350px]"
                style={{
                  textWrap: "balance",
                }}
              >
                Alquila el coche de tus sueños. Precios imbatibles, kilometraje
                ilimitado, opciones flexibles de recogida y mucho más.
              </p>
            </div>

            <div className="flex items-center gap-x-4 mt-8">
              <Button
                asChild
                className="py-8 px-5 text-md shadow-lg shadow-primary/25 rounded"
              >
                <Link href="/stock" className="flex">
                  Ver Stock
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 ml-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="py-8 px-5 text-md shadow-xl rounded"
              >
                Más info
              </Button>
            </div>
          </div>
          <div className="w-[62.5%]">
            <Image
              src="/images/polo-banner.png"
              // src="/images/golf-front.png"
              alt="Audi Banner"
              width={800}
              height={600}
              className="
                  w-full 
                  h-full 
                  object-cover 
                  object-center
                         
                "
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

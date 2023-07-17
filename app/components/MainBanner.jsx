import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const MainBanner = () => {
  return (
    <Container>
      <div className="h-[calc(90vh-96px)] flex items-center z-10">
        <div className="flex">
          <div className="w-[40%]">
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
                className="text-muted-foreground font-light"
                style={{
                  textWrap: "balance",
                }}
              >
                Alquila el coche de tus sueños. Precios imbatibles, kilometraje
                ilimitado, opciones flexibles de recogida y mucho más.
              </p>
            </div>

            <div className="flex items-center gap-x-4 mt-8">
              <Button className="py-8 px-5 text-md">
                Reservar Coche
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
              </Button>
              <Button variant="secondary" className="py-8 px-5 text-md">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clipRule="evenodd"
                  />
                </svg> */}
                Más info
              </Button>
            </div>
          </div>
          <div className="w-[60%]">
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

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const TableRow = ({ title, value }) => {
  return (
    <div className="flex justify-evenly h-10 border-2 border-muted-foreground border-t-0 items-center space-x-4 text-sm">
      <h1 className="w-full text-center">{title}</h1>
      <Separator
        orientation="vertical"
        className="bg-muted-foreground w-[2px] h-6"
      />
      <h1 className="w-full text-center">{value}</h1>
    </div>
  );
};

export const Models = () => {
  return (
    <Container className="max-w-[1920px] mx-auto relative bg-no-repeat bg-right-top px-8">
      <Container className="my-24">
        <h1 className="text-2xl text-center underline decoration-primary">
          Modelos de coche
        </h1>
        <h1 className="text-5xl font-bold text-center">Nuestra flota</h1>

        <div className="flex justify-between items-start  mx-auto mt-12">
          <div className="w-1/5 flex flex-col gap-2">
            <Button className="py-4 h-fit text-xl justify-start">
              Audi A1 S-Line
            </Button>
            <Button
              variant="secondary"
              className="py-4 h-fit text-xl justify-start bg-[#c4c4c4] hover:bg-primary/75"
            >
              VW Golf 6
            </Button>
            <Button
              variant="secondary"
              className="py-4 h-fit text-xl justify-start bg-[#c4c4c4] hover:bg-primary/75"
            >
              Toyota Camry
            </Button>
            <Button
              variant="secondary"
              className="py-4 h-fit text-xl justify-start bg-[#c4c4c4] hover:bg-primary/75"
            >
              BMW 320 ModernLine
            </Button>
            <Button
              variant="secondary"
              className="py-4 h-fit text-xl justify-start bg-[#c4c4c4] hover:bg-primary/75"
            >
              Mercedes-Benz GLK
            </Button>
            <Button
              variant="secondary"
              className="py-4 h-fit text-xl justify-start bg-[#c4c4c4] hover:bg-primary/75"
            >
              VW Passat CC
            </Button>
          </div>

          <div className="w-3/5 flex items-center justify-center">
            <Image
              src="/images/golf-front.png"
              alt="imagen"
              width={800}
              height={800}
              className="w-full h-full max-w-[625px] object-contain p-6"
            />
          </div>
          <div className="w-1/5">
            <div className="w-full mb-4">
              <header className="bg-primary text-background py-2">
                <h1 className="text-2xl font-semibold text-center">
                  €79.99 / Por dia
                </h1>
              </header>
              <div className="w-full">
                <TableRow title="Marca" value="Audi" />
                <TableRow title="Modelo" value="A1" />
                <TableRow title="Año" value="2021" />
                <TableRow title="Puertas" value="5" />
                <TableRow title="Segmento" value="SUV" />
                <TableRow title="Transmisión" value="Automático" />
                <TableRow title="Combustible" value="Gasolina" />
              </div>
            </div>
            <Button className="py-2 h-fit text-xl w-full shadow-xl shadow-primary/25">
              VER STOCK
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
};

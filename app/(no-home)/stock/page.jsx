import { getCars } from "@/actions/getCars";
import { Container } from "@/components/shared/Container";
import { CarCard } from "../catalogo/CarCard";

export const metadata = {
  title: "Nuestro Stock - Rentacar",
};

const Stockpage = async () => {
  const cars = await getCars();
  console.log(cars);

  return (
    <Container className="py-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Coches disponibles</h1>
        <p>Un total de {cars?.length} coches</p>
      </header>

      <main className="grid grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </main>
    </Container>
  );
};

export default Stockpage;

import { Container } from "@/components/shared/Container";
import Image from "next/image";

const BannerItem = ({ src, title, description }) => {
  return (
    <div className="w-fit text-center">
      <Image
        src={src}
        alt="select"
        width={170}
        height={170}
        className="mx-auto"
      />

      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p
        className="max-w-[300px] text-muted-foreground"
        style={{
          textWrap: "balance",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export const EasyBanner = () => {
  return (
    <section className="bg-white mt-24 py-24">
      <Container>
        <h1 className="text-2xl text-center underline decoration-primary">
          Planea tu viaje ahora
        </h1>
        <h1 className="text-5xl font-bold text-center">
          Rápido y facil con Rentacar
        </h1>

        <div
          className="
            grid 
            grid-cols-3 
            place-items-center
            gap-8 
            mt-16 
            w-full
            max-w-[1150px]
            mx-auto
        "
        >
          <BannerItem
            src="/images/fast-img-1.png"
            title="Selecciona un coche"
            description="Ofrecemos una amplia gama de vehículos para todas tus necesidades de conducción. Tenemos el coche perfecto para satisfacer tus necesidades."
          />

          <BannerItem
            src="/images/fast-img-2.png"
            title="Soporte 24/7"
            description="Nuestros operadores capacitados y amigables están siempre listos para ayudar con cualquier pregunta o inquietud."
          />

          <BannerItem
            src="/images/fast-img-3.png"
            title="¡A disfrutar!"
            description="Viajar nunca había sido tan fácil y cómodo con nuestra compañia de alquiler de coches."
          />
        </div>
      </Container>
    </section>
  );
};

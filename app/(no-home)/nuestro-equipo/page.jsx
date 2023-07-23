import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export const metadata = {
  title: "Nuestro equipo - Rentacar",
};

const images = [
  "/images/our-team-1.png",
  "/images/our-team-2.png",
  "/images/our-team-3.png",
  "/images/our-team-4.png",
  "/images/our-team-5.png",
  "/images/our-team-6.png",
];

const NuestroEquipoPage = () => {
  return (
    <>
      <Container>
        <div className="flex justify-between gap-8 py-24">
          <div className="w-3/5">
            <Image
              src="/images/our-team.jpg"
              alt="Nuestro equipo"
              width={800}
              height={400}
              className="w-full object-cover rounded"
            />

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Image
                src="/images/our-team-2.jpg"
                alt="Nuestro equipo"
                width={240}
                height={120}
                className="rounded object-cover object-center max-h-[140px]"
              />
              <Image
                src="/images/our-team-3.jpg"
                alt="Nuestro equipo"
                width={240}
                height={120}
                className="rounded object-cover object-center max-h-[140px]"
              />
              <Image
                src="/images/our-team-4.jpg"
                alt="Nuestro equipo"
                width={240}
                height={120}
                className="rounded object-cover object-center max-h-[140px]"
              />
            </div>
          </div>
          <div className="w-2/5">
            <h1 className="text-4xl font-semibold mb-8">
              ¡El mejor equipo posible!
            </h1>

            <div className="space-y-6">
              <p className="text-muted-foreground">
                En Rentacar, nos enorgullecemos de contar con el mejor equipo
                humano que te acompañará en cada paso de tu experiencia con
                nosotros. Nuestro equipo está formado por apasionados amantes de
                los automóviles y expertos en la industria, dedicados a
                brindarte un servicio excepcional y hacerte sentir como en casa
                desde el momento en que nos contactas.
              </p>
              <p className="text-muted-foreground">
                Cada miembro de nuestro equipo ha sido cuidadosamente
                seleccionado por su compromiso con la excelencia y su pasión por
                superar las expectativas de nuestros clientes. Desde nuestros
                amables agentes de atención al cliente, siempre dispuestos a
                ayudarte y resolver cualquier consulta, hasta nuestros
                especialistas en logística, que se aseguran de que tu vehículo
                esté listo para emprender el viaje de tus sueños, todos
                trabajamos en armonía para brindarte una experiencia
                inolvidable.
              </p>
              <p className="text-muted-foreground">
                Nuestro equipo comprende que cada cliente es único, y por ello,
                estamos dedicados a personalizar cada detalle para satisfacer
                tus necesidades y preferencias. Ya sea que necesites
                asesoramiento sobre el vehículo perfecto para tu escapada, o que
                desees obtener recomendaciones sobre los mejores destinos para
                explorar, nuestro equipo estará encantado de compartir su
                conocimiento y entusiasmo contigo.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-3 place-items-center gap-8 py-24">
        {images.map((image, index) => (
          <Card key={index} className="shadow-lg border-muted-foreground/10">
            <CardContent className="px-6 pt-6 pb-0 bg-background rounded-lg">
              <Image
                src={image}
                alt="Nuestro equipo"
                width={350}
                height={400}
              />
            </CardContent>
            <CardFooter className="text-center flex-col p-6">
              <h1 className="text-lg font-semibold">Luke Miller</h1>
              <p className="text-muted-foreground">Salesman</p>
            </CardFooter>
          </Card>
        ))}
      </div> */}
      </Container>
      <Footer />
    </>
  );
};

export default NuestroEquipoPage;

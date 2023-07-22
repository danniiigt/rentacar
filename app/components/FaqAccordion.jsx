import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full bg-white/50 shadow">
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20">
          ¿Cómo puedo encontrar los precios más bajos?
        </AccordionTrigger>
        <AccordionContent className="p-6 border-l border-r bg-white/50 text-muted-foreground text-[15px]">
          Reservar con antelación: Reservar tu coche de alquiler con
          anticipación puede resultar en precios más bajos. Compara precios de
          múltiples compañías: Utiliza sitios web como Kayak, Expedia o
          Travelocity para comparar precios de diversas compañías de alquiler de
          coches. Busca códigos de descuento y cupones: Busca códigos de
          descuento y cupones que puedas usar para reducir el precio del
          alquiler. Alquilar desde una ubicación fuera del aeropuerto a veces
          puede resultar en precios más bajos.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20">
          ¿Puedo alquilar un coche teniendo 25 años o menos?
        </AccordionTrigger>
        <AccordionContent className="p-6 border-l border-r bg-white/50 text-muted-foreground text-[15px]">
          En Rentacar, nos complace ofrecer opciones de alquiler de coches para
          conductores jóvenes. Puedes alquilar un coche con nosotros si tienes
          al menos 18 años y posees un carnet de conducir válido. Valoramos la
          confianza que los conductores jóvenes depositan en nosotros y
          trabajamos para brindarles un servicio seguro y confiable.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20">
          ¿Cuáles son los documentos necesarios para alqular un coche?
        </AccordionTrigger>
        <AccordionContent className="p-6 border-l border-r bg-white/50 text-muted-foreground text-[15px]">
          Para reservar un coche con Rentacar, necesitarás presentar una
          licencia de conducir válida emitida en tu país de origen. Además, será
          necesario proporcionar una tarjeta de crédito válida a tu nombre para
          el pago y el depósito de seguridad. También recomendamos tener a mano
          una identificación con foto y tu número de teléfono de contacto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="px-6 data-[state=open]:bg-primary data-[state=open]:text-primary-foreground data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20">
          ¿Cuál es la política de cancelación de reservas?
        </AccordionTrigger>
        <AccordionContent className="p-6 border-l border-r bg-white/50 text-muted-foreground text-[15px]">
          En Rentacar, entendemos que los planes pueden cambiar. Por lo tanto,
          ofrecemos una política de cancelación flexible. Si necesitas cancelar
          tu reserva, te pedimos que lo hagas con suficiente antelación para que
          podamos ajustar nuestra disponibilidad. No aplicamos cargos de
          cancelación si realizas la cancelación dentro de un período
          determinado antes de la fecha de recogida. Sin embargo, te
          recomendamos que revises los detalles exactos de nuestra política de
          cancelación al realizar la reserva, ya que pueden aplicarse
          condiciones específicas según el tipo de vehículo y la temporada.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

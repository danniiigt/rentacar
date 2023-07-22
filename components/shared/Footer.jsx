import React from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const FirstColumn = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Rentacar</h1>

      <p className="text-muted-foreground">
        Ofrecemos una amplia gama de vehículos para todas tus necesidades de
        conducción. Tenemos el coche perfecto para satisfacer tus necesidades.
      </p>

      <div className="space-y-3">
        <div className="flex items-center hover:text-primary cursor-pointer transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="font-semibold">+34 601352386</h1>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>

          <h1 className="font-semibold">soporte@rentacar.com</h1>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>

          <h1 className="font-semibold">Gran Vía, Madrid, España</h1>
        </div>
      </div>
    </div>
  );
};

const SecondColumn = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Nuestras Sedes</h1>

      <div className="space-y-3">
        <Link
          href="#"
          className="text-muted-foreground hover:text-primary transition-all duration-200 block"
        >
          Madrid
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-primary transition-all duration-200 block"
        >
          Barcelona
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-primary transition-all duration-200 block"
        >
          Valencia
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-primary transition-all duration-200 block"
        >
          Murcia
        </Link>
        <Link
          href="#"
          className="text-muted-foreground hover:text-primary transition-all duration-200 block"
        >
          Málaga
        </Link>
      </div>
    </div>
  );
};

const ThirdColumn = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Nuestro Horario</h1>

      <div className="space-y-3">
        <p className="text-muted-foreground hover:text-primary transition-all duration-200 block">
          Lun - Vie: 9:00 - 20:00
        </p>
        <p className="text-muted-foreground hover:text-primary transition-all duration-200 block">
          Sábado: 9:00 - 14:00
        </p>
        <p className="text-muted-foreground hover:text-primary transition-all duration-200 block">
          Domingo: Cerrado
        </p>
      </div>
    </div>
  );
};

const FourthColumn = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Nuestra Newsletter</h1>

      <p className="text-muted-foreground">
        Suscríbete con tu dirección de correo electrónico para recibir las
        últimas noticias y actualizaciones.
      </p>

      <div className="space-y-2">
        <Input
          placeholder="Correo electrónico"
          className="w-full rounded-none"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          }
        />
        <Button className="w-full">Suscribirse</Button>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="bg-white w-full py-16">
      <Container>
        <div className="grid grid-cols-4 gap-12">
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
          <FourthColumn />
        </div>
      </Container>
    </div>
  );
};

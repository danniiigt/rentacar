import { Container } from "@/components/shared/Container";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactoPage = () => {
  return (
    <>
      <Container className="py-12">
        <div className="bg-[url('/images/bg-contact.png')] py-24 bg-center bg-no-repeat bg-cover grid grid-cols-2 gap-x-24">
          <div className="space-y-12 pr-4">
            <h1
              className="text-5xl font-semibold"
              style={{ textWrap: "balance" }}
            >
              ¿Necesitas ayuda con algo?
            </h1>

            <p
              style={{ textWrap: "balance" }}
              className="text-muted-foreground"
            >
              Si tienes alguna pregunta sobre nuestros servicios de alquiler de
              coches, no dudes en ponerte en contacto con nosotros. Nuestro
              equipo de atención al cliente estará encantado de ayudarte en lo
              que necesites.
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
              <div className="flex items-center hover:text-primary cursor-pointer transition-all duration-150">
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
              <div className="flex items-center hover:text-primary cursor-pointer transition-all duration-150">
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

          <div className="space-y-6">
            <div>
              <label>
                Nombre completo{" "}
                <span className="text-primary font-semibold">*</span>
              </label>
              <Input
                placeholder="Tu nombre completo..."
                className="h-14 px-4 py-4 text-md border-none shadow"
              />
            </div>
            <div>
              <label>
                Email <span className="text-primary font-semibold">*</span>
              </label>
              <Input
                placeholder="Tu correo electrónico..."
                className="h-14 px-4 py-4 text-md border-none shadow"
              />
            </div>
            <div>
              <label>
                Asunto <span className="text-primary font-semibold">*</span>
              </label>

              <Textarea
                placeholder="Describenos el problema"
                className="px-4 py-4 text-md border-none shadow bg-background min-h-[200px]"
                multiple
              />
            </div>

            <Button className="w-full shadow-xl shadow-primary/25 text-md h-14 rounded-sm">
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ContactoPage;

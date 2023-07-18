import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";
import { PickCar } from "./components/PickCar";
import { EasyBanner } from "./components/EasyBanner";
import { Models } from "./components/Models";
import { SaveBanner } from "./components/SaveBanner";
import { Container } from "@/components/shared/Container";

const Page = () => {
  return (
    <main>
      <Container className="max-w-[1920px] mx-auto relative bg-[url('/images/banner-bg.png')] bg-no-repeat bg-right-top px-8">
        <Navbar />
        <MainBanner />
        <PickCar />
      </Container>
      <EasyBanner />
      <Container className="max-w-[1920px] mx-auto relative bg-no-repeat bg-right-top px-8">
        <Models />
      </Container>
      <SaveBanner />
    </main>
  );
};

export default Page;

import { EasyBanner } from "./components/EasyBanner";
import { MainBanner } from "./components/MainBanner";
import { Models } from "./components/Models";
import { Navbar } from "./components/Navbar";
import { PickCar } from "./components/PickCar";
import { SaveBanner } from "./components/SaveBanner";
import { Container } from "@/components/shared/Container";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PeopleReview } from "./components/PeopleReview";
import { Faq } from "./components/Faq";
import { Footer } from "@/components/shared/Footer";

const Page = () => {
  return (
    <main>
      <Container className="max-w-[1920px] mx-auto relative bg-[url('/images/banner-bg.png')] bg-no-repeat bg-right-top px-8">
        <Navbar />
        <MainBanner />
        <PickCar />
      </Container>
      <EasyBanner />
      <Models />
      <SaveBanner />
      <WhyChooseUs />
      <PeopleReview />
      <Faq />
      <Footer />
    </main>
  );
};

export default Page;

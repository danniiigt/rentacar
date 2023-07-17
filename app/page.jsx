import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";
import { PickCar } from "./components/PickCar";
import { EasyBanner } from "./components/EasyBanner";
import { Models } from "./components/Models";
import { SaveBanner } from "./components/SaveBanner";

const Page = () => {
  return (
    <div className="min-h-screen w-screen max-w-[1920px] mx-auto relative bg-[url('/images/banner-bg.png')] bg-no-repeat bg-right-top px-8 pb-8">
      <Navbar />
      <MainBanner />
      <PickCar />
      <EasyBanner />
      <Models />
      <SaveBanner />
    </div>
  );
};

export default Page;

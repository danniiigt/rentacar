import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";

const Page = () => {
  return (
    <div className="min-h-screen w-screen max-w-[1600px] mx-auto relative bg-[url('/images/banner-bg.png')] bg-no-repeat bg-right-top px-8">
      <Navbar />
      <MainBanner />
    </div>
  );
};

export default Page;

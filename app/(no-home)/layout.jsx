import { Navbar } from "../components/Navbar";
import { NavBanner } from "@/components/shared/NavBanner";

const NoHomeLayout = ({ children }) => {
  return (
    <div className="h-[375px] w-full bg-[url('https://car-rental-ten.vercel.app/static/media/heroes-bg.71ab9a13d73de3860763.png')] bg-center bg-no-repeat bg-cover">
      <nav className="bg-white/90 h-full">
        <Navbar />
        <NavBanner />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default NoHomeLayout;

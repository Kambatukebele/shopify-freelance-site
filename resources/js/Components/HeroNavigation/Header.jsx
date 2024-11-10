import Nav from "./Nav";
import { Icon, heroNavigation } from "../../my_data";
import Hero from "./Hero";
import Image from "../Image";
const Header = () => {
  const { circle, background, logo, imgHero, blue_circle } = heroNavigation;
  return (
    <header className="bg-custom-bg h-[1100px] sm:h-[900px] md:h-[1000px] bg-no-repeat bg-cover bg-center  xl:h-screen xl:relative">
      <div className="container h-fit mx-auto flex flex-col justify-center gap-4 xl:gap-0">
        <Nav logo={logo} />
        {/* Hero section */}
        <Hero image={{ imgHero, circle }} />
      </div>
      <div className="absolute top-20 left-0 animate-pulse">
        <Image image={blue_circle} />
      </div>
    </header>
  );
};

export default Header;

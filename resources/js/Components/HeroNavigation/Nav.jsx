import { useState } from "react";
import Logo from "../Logo";
import Ul from "./Ul";
import Button from "../Button";
import HambugerMenu from "./HambugerMenu";
import CloseMenu from "./CloseMenu";
const Nav = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowHideMenuOnSmallDevice = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between items-center py-4 z-40">
      {/* Logo */}
      <Logo logo={logo} />
      <Ul isOpen={isOpen} />
      <Button
        buttonText="Book a call"
        buttonExtraClass="hidden w-52 bg-purple900  text-white xl:flex"
        buttonIconClass="bg-white text-blue"
        buttonType="button"
        buttonLink="https://calendly.com/kambatukebele/30min"
      />
      {/* Hamburger and close Menu */}
      <div className="xl:hidden">
        <div
          onClick={handleShowHideMenuOnSmallDevice}
          className={isOpen ? "hidden" : "block"}
        >
          <HambugerMenu />
        </div>
        <div
          onClick={handleShowHideMenuOnSmallDevice}
          className={isOpen ? "block" : "hidden"}
        >
          <CloseMenu />
        </div>
      </div>
    </nav>
  );
};
export default Nav;

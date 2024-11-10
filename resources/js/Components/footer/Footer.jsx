import UpFooter from "../footer/UpFooter";
import BottomFooter from "../footer/BottomFooter";
import SeparatorFooter from "./SeparatorFooter";
const Footer = () => {
  return (
    <footer className="w-full h-fit bg-white py-10 lg:py-20 bg-bg-longue bg-no-repeat bg-cover bg-center relative">
      <div className="container mx-auto">
        <UpFooter />
        <SeparatorFooter />
        <BottomFooter />
      </div>
    </footer>
  );
};
export default Footer;

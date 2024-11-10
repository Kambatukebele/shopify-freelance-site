import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
import Paragraph from "../Paragraph";
import Image from "../Image";
const CardPortfolio = ({ img, title, description, link, stack, tech }) => {
  return (
    <div className="w-[300px] h-fit flex flex-col justify-center items-center shadow-sm border border-purple50 rounded-b-2xl sm:w-[560px]">
      <div className="w-[300px] h-[200px] sm:w-[560px] sm:h-[400px]">
        <Image image={img} imageExtraClass="" />
      </div>
      <div className="w-[300px] h-[150px] py-2 px-4 sm:w-[560px] flex flex-col justify-center items-start gap-2">
        <H4 h4Title={title} h4ExtraClass="font-medium text-black900 mb-2" />
        <h6>Live: <a className="text-red-900 underline" href={link}>Click here</a></h6>
        <Paragraph paraText={description} width="text-gray50 w-full" />
      </div>
    </div>
  );
};
export default CardPortfolio;

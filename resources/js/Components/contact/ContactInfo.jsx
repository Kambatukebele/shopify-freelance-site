import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Paragraph from "../Paragraph";
import H4 from "../H4";
const ContactInfo = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-4 p-10 w-full bg-black900 rounded-2xl">
      <div className="flex flex-col justify-center items-center gap-4">
        <H4
          h4Title="Contact Info"
          h4ExtraClass="text-white font-semibold"
        />
        <Paragraph
          paraText="If you're in need of a freelance Shopify developer, want a full Shopify ecommerce website, custom theme development or just need to hear some straightforward advice on how to start your next Shopify project, I'm all ears: let's have a chat!"
          width="text-white text-center lg:w-[700px]"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faLocation}
            />
          </span>
          <div>
            <span className="text-white block font-medium text-xl mb-1 text-center">
              Our Location
            </span>
            <Paragraph
              paraText="Remote / Based in Europe, Czech Republic"
              width="text-white text-center"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faPhone}
            />
          </span>
          <div>
            <span className="text-white block font-medium text-xl mb-1 text-center">
              Call or Whatsapp me
            </span>
            <Paragraph paraText="+420 607 284 825" width="text-white text-center" />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
          <span className="flex justify-center items-center w-9 h-9 bg-purple50 rounded-full">
            <FontAwesomeIcon
              className="text-black900 text-2xl"
              icon={faEnvelope}
            />
          </span>
          <div>
            <span className="text-white block font-medium text-xl mb-1 text-center">
              Email me
            </span>
            <Paragraph
              paraText="kambatukebele@gmail.com, kamba@kambatukebele.com"
              width="text-white text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;

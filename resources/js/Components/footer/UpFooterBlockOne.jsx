import linkedin from "../../../../public/assets/svg/linkedin.svg";
import github from "../../../../public/assets/svg/github.svg";
import twitter from "../../../../public/assets/svg/twitter.svg";
import instagram from "../../../../public/assets/svg/instagram.svg";
import logo from "../../../../public/assets/images/logo.png";
import Logo from "../Logo";
import Paragraph from "../Paragraph";
const UpFooterBlockOne = () => {
    return (
        <div className="w-full flex justify-center items-start flex-col py-4 gap-4">
            <Logo logo={logo} />
            <Paragraph
                paraText="As Your dedicated freelancer, I will help you maximize your business potential by enhancing your store design, adding new functionalities, and implementing effective strategies to boost your sales and growth."
                width="w-[270px] lg:w-[230px]"
            />
            <div className="w-full flex justify-start items-center gap-2">
                <a
                    href="https://www.linkedin.com/in/kamba-tukebele/"
                    className="w-10 h-10 bg-purple900 flex justify-center items-center rounded-full"
                >
                    <img className="" src={linkedin} alt="" />
                </a>
                <a
                    href="https://github.com/Kambatukebele"
                    className="w-10 h-10 bg-purple900 flex justify-center items-center rounded-full"
                >
                    <img className="" src={github} alt="" />
                </a>
                <a
                    href="https://x.com/kambatukebele"
                    className="w-10 h-10 bg-purple900 flex justify-center items-center rounded-full"
                >
                    <img className="" src={twitter} alt="" />
                </a>
                <a
                    href="https://instagram.com/kambatukebele"
                    className="w-10 h-10 bg-purple900 flex justify-center items-center rounded-full"
                >
                    <img className="" src={instagram} alt="" />
                </a>
            </div>
        </div>
    );
};
export default UpFooterBlockOne;

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faLocation,
//   faPhone,
// } from "@fortawesome/free-solid-svg-icons";
import H4 from "../H4";
const UpFooterBlockThree = () => {
    return (
        <div className="w-full flex justify-center items-start flex-col py-4 gap-4">
            <div>
                <H4 h4Title="Get in touch" />
            </div>
            <div className="flex flex-col justify-center items-start gap-4">
                <div className="flex justify-center items-center gap-3">
                    <span className="w-9 h-9 bg-purple900 flex justify-center items-center rounded-full">
                        {/* <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-white"
                        /> */}
                    </span>
                    <span className="w-44 text-gray50">
                        kambatukebele@gmail.com
                    </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <span className="w-9 h-9 bg-purple900 flex justify-center items-center rounded-full">
                        {/* <FontAwesomeIcon
                            icon={faPhone}
                            className="text-white"
                        /> */}
                    </span>
                    <span className="w-44 text-gray50">+420 607 284 825</span>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <span className="w-9 h-9 bg-purple900 flex justify-center items-center rounded-full">
                        {/* <FontAwesomeIcon
                            icon={faLocation}
                            className="text-white"
                        /> */}
                    </span>
                    <span className="w-44 text-gray50">
                        Remote / Based in Europe, Czech Republic
                    </span>
                </div>
            </div>
        </div>
    );
};
export default UpFooterBlockThree;

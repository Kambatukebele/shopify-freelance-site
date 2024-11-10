import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStore } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

const Button = ({
    buttonText,
    buttonExtraClass,
    buttonIconClass,
    buttonType,
    buttonLink,
}) => {
    const [isRotated, setIsRotated] = useState(false);
    const handleMouseOver = () => {
        setIsRotated(true);
    };
    const handleMouseLeave = () => {
        setIsRotated(false);
    };
    return (
        <>
            <button
                type={`${buttonType}`}
                className={`${buttonExtraClass} h-14 flex justify-center items-center gap-3 py-2 px-4 rounded-full mt-0 hover:bg-blue hover:shadow-2xl hover:shadow-blue duration-200 ease-in-out`}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseLeave}
            >
                <a
                    className="block text-base font-semibold capitalize"
                    href={`${buttonLink}`}
                >
                    {buttonText}
                </a>{" "}
                <span
                    className={`"text-sm w-8 h-8 ${buttonIconClass} flex justify-center items-center rounded-full`}
                >
                    <FontAwesomeIcon
                        className={`${
                            isRotated ? "rotate-0" : "-rotate-45"
                        } duration-200 ease-in-out`}
                        icon={faArrowRight}
                    />
                </span>
            </button>
        </>
    );
};
export default Button;

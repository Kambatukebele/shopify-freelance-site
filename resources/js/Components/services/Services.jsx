import DownDiv from "./DownDiv";
import TopDiv from "./TopDiv";
import Image from "../Image";
import star from "../../../../public/assets/images/star.png";
const Services = () => {
    return (
        <section
            className="w-full h-fit bg-white py-10 lg:py-20 bg-bg-longue bg-no-repeat bg-cover bg-center relative"
            id="services"
        >
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <TopDiv />
                <DownDiv />
                <div className="w-5 absolute top-3 left-5 animate-slowRotate sm:w-7 lg:w-10">
                    <Image image={star} />
                </div>
                <div className="w-5 absolute top-20 right-5 animate-slowRotate sm:w-7 lg:w-10">
                    <Image image={star} />
                </div>
            </div>
        </section>
    );
};
export default Services;

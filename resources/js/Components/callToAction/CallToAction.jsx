import UpCallToAction from "../callToAction/UpCallToAction";
import cta_bg1 from "../../../../public/assets/images/cta_bg.png";
import cta_bg2 from "../../../../public/assets/images/cta_bg2.png";
import Image from "../Image";
const CallToAction = () => {
    return (
        <section className="w-full h-fit bg-blue py-10 lg:py-20 bg-no-repeat bg-cover bg-center relative">
            <div className="container mx-auto flex flex-col justify-center items-center gap-12">
                <UpCallToAction />
                <div className="w-20 animate-upAndDown absolute top-0 left-0 sm:w-44 lg:w-52">
                    <Image image={cta_bg1} />
                </div>
                <div className="w-20 animate-upAndDown absolute bottom-0 right-0 sm:w-44 lg:w-52">
                    <Image image={cta_bg2} />
                </div>
            </div>
        </section>
    );
};
export default CallToAction;

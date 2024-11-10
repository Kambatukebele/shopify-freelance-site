import Button from "../Button";
import Image from "../Image";
import Paragraph from "../Paragraph";
import cup from "../../../../public/assets/svg/cup.svg";
import lamp from "../../../../public/assets/svg/lamp.svg";
import H6 from "../H6";
const Hero = ({ image }) => {
    return (
        <div className="w-full flex flex-col justify-between items-center gap-4 xl:flex-row xl:items-center xl:absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:container xl:h-fit">
            <div className="flex flex-col justify-center items-start gap-5 mt-8 xl:w-1/2 xl:mt-0">
                <H6 h6Title="Hey! I am KAMBA TUKEBELE" />
                <h1 className="text-4xl font-bold text-start md:text-6xl">
                    Freelance Shopify Developer for Shopify Store Owners
                </h1>
                <Paragraph paraText="If you're a Shopify store owner seeking a remote freelance Shopify developer for seamless migrations, custom theme development, or comprehensive e-commerce website builds, your search ends here! Let's discuss your project and explore how I can elevate your business with expert Shopify solutions." />
                <div className="flex flex-col justify-center items-start gap-2 sm:flex-row">
                    <Button
                        buttonText="Free Consultation"
                        buttonExtraClass="flex w-56 bg-purple900 text-white mb-1 lg:mb-0 lg:mr-2"
                        buttonIconClass="bg-white text-blue"
                        buttonLink="https://calendly.com/kambatukebele/30min"
                    />
                    <Button
                        buttonText="View my videos"
                        buttonExtraClass="flex w-52 bg-transparent border border-blue text-blue hover:text-white"
                        buttonIconClass="bg-blue text-white hover:bg-white"
                        buttonLink="https://www.youtube.com/channel/UCIT6MIpRklmSfkJ88DEGhPQ"
                    />
                </div>
            </div>
            <div className="w-full h-full xl:absolute xl:-top-32 xl:right-72 xl:w-[350px]">
                <div className="relative mx-auto w-[280px]">
                    <div className="absolute -top-28 left-0 right-0 w-[280px] mx-auto h-auto sm:w-[320px] xl:w-[500px] z-20">
                        <Image image={image.imgHero} />
                    </div>
                    <div className="absolute top-0 left-0 right-0 z-0 w-[280px] mx-auto h-auto sm:w-[320px] xl:w-[600px]">
                        {/* Image circle */}
                        <Image image={image.circle} />
                    </div>
                    <div
                        className={`absolute top-20 right-0 mx-auto w-[50px] md:w-[100px] md:top-0 lg:-right-16 xl:-right-80  duration-700 ease-in-out animate-upAndDown`}
                    >
                        <Image image={lamp} />
                    </div>
                    <div className="absolute animate-upAndDown top-10 -left-0 mx-auto w-[50px] xl:top-44 md:w-[100px] md:top-0">
                        <Image image={cup} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;

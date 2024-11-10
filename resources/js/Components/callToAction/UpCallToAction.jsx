import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";
import Button from "../Button";
const UpCallToAction = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Are you ready?" />
      <H2
        h2Title="Ready to Elevate Your Shopify E-commerce Business to the Next Level?"
        h2ExtraClass="font-semibold text-white sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Button
        buttonText="Hire me today"
        buttonExtraClass="bg-white hover:bg-purple50"
        buttonIconClass="bg-purple900 text-white"
        buttonLink="https://calendly.com/kambatukebele/30min"
      />
    </div>
  );
};
export default UpCallToAction;

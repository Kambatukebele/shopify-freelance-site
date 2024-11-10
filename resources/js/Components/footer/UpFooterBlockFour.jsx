import H4 from "../H4";
import FieldInput from "../FieldInput";
import Button from "../Button";
import Paragraph from "../Paragraph";
const UpFooterBlockFour = () => {
  return (
    <div className="w-full flex justify-center items-start flex-col py-4 gap-4 xl:py-0">
      <div>
        <H4 h4Title="Get in touch" />
        <Paragraph paraText="Let's talk about your project and how I can help your business." />
      </div>
      <form className="w-full">
        <div className="flex flex-col justify-center items-start w-full gap-4 px-4 sm:px-0">
          <FieldInput
            fieldInputName="name"
            fieldInputType="text"
            fieldInputPlaceholder="Enter your email"
          />
          <Button
            buttonText="Subscribe"
            buttonExtraClass="bg-purple900 text-white"
            buttonIconClass="bg-white text-black900"
          />
        </div>
      </form>
    </div>
  );
};
export default UpFooterBlockFour;

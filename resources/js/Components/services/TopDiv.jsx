import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";

const TopDiv = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <H6 h6Title="Services" />
      <H2
        h2Title="How I can help your Shopify website thrive:"
        h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
      />
      <Paragraph
        paraText="As a Shopify partner, I am well-equipped to assist you with various ecommerce projects."
        width="sm:text-center sm:w-[400px] md:w-[550px]"
      />
    </div>
  );
};
export default TopDiv;

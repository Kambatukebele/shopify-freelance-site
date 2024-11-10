import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const UpSolutions = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <H6 h6Title="Here are the solutions" />
            <H2
                h2Title="How I Can Enhance Your Shopify Website"
                h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
            />
            {/* <Paragraph
        paraText="I specialise in delivering Shopify websites and Shopify consultancy services to a range of clients of all sizes."
        width="sm:text-center sm:w-[400px] md:w-[550px]"
      /> */}
        </div>
    );
};
export default UpSolutions;

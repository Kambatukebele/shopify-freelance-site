import H6 from "../H6";
import H2 from "../H2";
import Paragraph from "../Paragraph";
const TopPorfolio = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <H6 h6Title="Projects" />
            <H2
                h2Title="Shopify Design & Development"
                h2ExtraClass="font-semibold sm:text-center sm:w-[400px] md:w-[550px]"
            />
            {/* <Paragraph
        paraText="Explore our blog to discover actionable insights, success stories, and
expert advice that can help drive growth for your business."
        width="sm:text-center sm:w-[400px] md:w-[550px]"
      /> */}
        </div>
    );
};
export default TopPorfolio;

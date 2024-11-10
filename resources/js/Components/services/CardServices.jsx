import H4 from "../H4";
import Paragraph from "../Paragraph";
const CardServices = ({ icon, title, description }) => {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-4 shadow-md py-4 px-4 rounded-2xl bg-purple900 h-[300px] cursor-pointer duration-200 ease-in-out hover:-mt-5 hover:bg-blue">
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-white text-blue text-lg">
                {icon}
            </span>
            <H4 h4Title={title} h4ExtraClass="text-white font-medium" />
            <Paragraph paraText={description} width="text-white" />
        </div>
    );
};
export default CardServices;

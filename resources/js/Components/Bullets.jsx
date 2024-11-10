import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Bullets = ({ text }) => {
  return (
    <>
      <div
        className={`w-full flex-col flex justify-center items-start gap-2 hover:bg-purple900 p-4 border shadow  border-purple900 rounded-2xl sm:flex-row sm:justify-between sm:items-center`}
      >
        <span className="text-white bg-blue rounded-full w-10 h-10 text-xs flex justify-center items-center">
          <FontAwesomeIcon icon={faThumbsUp} />
        </span>
        <span className="block text-base font-normal w-[200px] sm:w-[500px] md:w-[270px] lg:w-[350px] ">
          {text}
        </span>
      </div>
    </>
  );
};
export default Bullets;

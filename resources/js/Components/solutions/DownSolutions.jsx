import { solutions } from "../../my_data";
import CardSolutions from "./CardSolutions";
import Button from "../Button";
const DownSolutions = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 lg:gap-10">
        {solutions.map((solution) => {
          return <CardSolutions {...solution} />;
        })}
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          buttonText="Book a Call With me"
          buttonExtraClass="bg-purple900 text-white"
          buttonIconClass="bg-white text-blue"
          buttonLink="https://calendly.com/kambatukebele/30min"
        />
      </div>
    </>
  );
};
export default DownSolutions;

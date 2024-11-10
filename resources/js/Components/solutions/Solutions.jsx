import UpSolutions from "./UpSolutions";
import DownSolutions from "./DownSolutions";
const Solutions = () => {
  return (
    <section className="w-full h-fit bg-gray py-10 bg-bg-longue bg-no-repeat bg-cover bg-center lg:py-20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <UpSolutions />
        <DownSolutions />
      </div>
    </section>
  );
};
export default Solutions;

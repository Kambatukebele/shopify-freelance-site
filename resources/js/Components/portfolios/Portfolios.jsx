import TopPortfolio from "./TopPortfolio";
import DownPortfolio from "./DownPortfolio";
const Portfolios = () => {
  return (
    <section
      className="w-full h-fit bg-white py-10 lg:py-20 bg-bg-longue bg-no-repeat bg-cover bg-center relative"
      id="work"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-12">
        <TopPortfolio />
        <DownPortfolio />
      </div>
    </section>
  );
};
export default Portfolios;

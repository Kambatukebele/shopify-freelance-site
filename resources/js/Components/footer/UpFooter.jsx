import UpFooterBlockOne from "./UpFooterBlockOne";
import UpFooterBlockTwo from "./UpFooterBlockTwo";
import UpFooterBlockThree from "./UpFooterBlockThree";
import UpFooterBlockFour from "./UpFooterBlockFour";

const UpFooter = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      <UpFooterBlockOne />
      <UpFooterBlockTwo />
      <UpFooterBlockThree />
      <UpFooterBlockFour />
    </div>
  );
};
export default UpFooter;

import BottomFooterLeft from "./BottomFooterLeft";
import BottomFooterRight from "./BottomFooterRight";
const BottomFooter = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 xl:flex-row xl:justify-between">
      <BottomFooterLeft />
      <BottomFooterRight />
    </div>
  );
};
export default BottomFooter;

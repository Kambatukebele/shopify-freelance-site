const H6 = ({ h6Title, h6ExtraClass }) => {
  return (
    <h6
      className={`text-sm bg-purple50 ${h6ExtraClass} font-semibold flex justify-center items-center h-[33px] w-[250px] rounded-lg text-center text-black`}
    >
      {h6Title}
    </h6>
  );
};
export default H6;

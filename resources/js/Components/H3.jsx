const H3 = ({ title, width }) => {
  return (
    <h3 className={`text-xl lg:text-3xl text-darkText font-semibold ${width} `}>
      {title}
    </h3>
  );
};
export default H3;

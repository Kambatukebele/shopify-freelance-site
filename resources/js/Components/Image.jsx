const Image = ({ image, imageExtraClass }) => {
  return (
    <>
      <img
        className={`w-full h-full object-cover object-center ${imageExtraClass}`}
        src={image}
        alt=""
      />
    </>
  );
};
export default Image;

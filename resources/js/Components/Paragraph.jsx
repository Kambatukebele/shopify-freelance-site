const Paragraph = ({ paraText, width }) => {
  return (
    <>
      <p className={`text-gray50 text-base font-normal ${width}`}>{paraText}</p>
    </>
  );
};
export default Paragraph;

const FieldInput = ({
  fieldInputPlaceholder,
  fieldInputName,
  fieldInputType,
}) => {
  return (
    <>
      <input
        className="block w-full h-[53px] border border-purple50 rounded-lg px-4 text-sm"
        type={`${fieldInputType}`}
        name={`${fieldInputName}`}
        placeholder={`${fieldInputPlaceholder}`}
      />
    </>
  );
};
export default FieldInput;

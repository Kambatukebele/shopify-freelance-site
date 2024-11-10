const FieldOption = ({ fieldOptionTitle, fieldOptionValue }) => {
  return (
    <>
      <option
        value={`${fieldOptionValue}`}
        className="text-gray50 bg-purple50 duration-500 ease-in-out"
      >
        {fieldOptionTitle}
      </option>
    </>
  );
};
export default FieldOption;

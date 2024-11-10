const FieldSelect = ({ children, fieldSelectName }) => {
  return (
    <>
      <select
        name={`${fieldSelectName}`}
        className="block w-full h-[53px] border border-purple50 rounded-lg px-4 text-sm bg-white"
      >
        {children}
      </select>
    </>
  );
};
export default FieldSelect;

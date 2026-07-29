const Input = ({ inputConfig, label, inputValueError }) => {
  const inputStyles =
    "border border-gray-500 w-full p-[0.5rem] text-lg rounded-lg focus:outline-none";
  return (
    <div className="flex flex-col ">
      <label htmlFor="">{label}</label>
      <input className={inputStyles} {...inputConfig} />
      <p>{inputValueError}</p>
    </div>
  );
};
export default Input;

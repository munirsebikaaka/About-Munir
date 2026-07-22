const Input = ({
  label,
  name,
  placeholder,
  values,
  handleChanges,
  inputError,
}) => {
  const inputStyles = `w-full rounded-2xl border bg-slate-950 py-1.5 pl-3  outline-none focus:border-blue-500 ${inputError && values.length < 1 ? "border-red-400" : "border-slate-800"}`;

  return (
    <>
      <label className="relative space-y-2 text-sm text-slate-300 ">
        <span>{label}</span>
        <input
          type="text"
          value={values}
          onChange={handleChanges}
          name={name}
          placeholder={placeholder}
          className={inputStyles}
        />
        {inputError && values.length < 1 && (
          <p className="absolute text-red-400/90 text-sm top-0 right-0">
            {inputError}
          </p>
        )}
      </label>
    </>
  );
};
export default Input;

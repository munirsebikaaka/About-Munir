const Input = ({
  label,
  name,
  placeholder,
  values,
  handleChanges,
  isValueNotAvailable,
}) => {
  return (
    <div>
      <label className="space-y-2 text-sm text-slate-300">
        <span>{label}</span>
        <input
          type="text"
          value={values}
          onChange={handleChanges}
          name={name}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 outline-none focus:border-blue-500 ${isValueNotAvailable ? "border-red-400" : ""}`}
        />
        {isValueNotAvailable && (
          <p className="text-red-400/90 text-sm pl-[10px]">
            Please input your {name}
          </p>
        )}
      </label>
    </div>
  );
};
export default Input;

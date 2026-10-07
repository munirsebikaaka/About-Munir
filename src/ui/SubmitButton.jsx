import { SendHorizontal } from "lucide-react";

const SubmitButton = ({ disabled, updatingForm, updateForm }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="mt-4 cursor-pointer  flex items-center justify-center gap-[0.3rem] w-full rounded-xl bg-[#295C9B] py-2.5 px-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#224d87] disabled:cursor-not-allowed disabled:opacity-70">
      {disabled ? updatingForm : updateForm}
      <SendHorizontal size={20} />
    </button>
  );
};
export default SubmitButton;

import { useNavigate } from "react-router-dom";

const NavigateButton = ({ children, page, justify }) => {
  const navigate = useNavigate();
  return (
    <div className={`mt-6 flex items-center ${justify} gap-3`}>
      <button
        onClick={() => navigate(page)}
        className="cursor-pointer rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-text-on-brand shadow-sm">
        {children}
      </button>
    </div>
  );
};
export default NavigateButton;

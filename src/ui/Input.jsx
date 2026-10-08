import { useState } from "react";
import { CircleAlert, Eye, EyeOff } from "lucide-react";

const Input = ({ label, icon: Icon, inputConfig, inputValueError }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isTextArea = inputConfig.rows;
  const isPassword = inputConfig.type === "password";
  const hasError = inputValueError && inputConfig.value.trim() === "";

  const commonStyles = ` w-full rounded-xl border  bg-surface  pl-12 pr-12 py-2.5 text-sm  text-text-primary placeholder:text-text-muted transition-all duration-200 focus:outline-none
      ${
        hasError
          ? "border-danger focus:ring-danger-soft"
          : "border-border focus:border-brand-hover focus:ring-brand-soft"
      }
  `;

  return (
    <div className="flex flex-col gap-[0.2] relative">
      <label className="font-semibold text-sm text-text-primary ml-1.5">
        {label}
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={20}
            className={`absolute left-4 top-1/2 -translate-y-1/2 ${!hasError ? "text-text-muted" : "text-danger"}`}
          />
        )}

        {isTextArea ? (
          <textarea
            className={`${commonStyles} resize-none min-h-[150px] pt-4`}
            {...inputConfig}
          />
        ) : (
          <input
            className={commonStyles}
            {...inputConfig}
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : inputConfig.type
            }
          />
        )}

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-brand-hover">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {hasError && (
        <>
          <div className="absolute right-3 flex items-center gap-2 text-sm text-danger">
            <span>{inputValueError}!</span>
          </div>
          <div
            className={`absolute ${isPassword ? "right-9" : "right-3"} text-danger top-[54%]`}>
            <CircleAlert size={15} />
          </div>
        </>
      )}
    </div>
  );
};

export default Input;

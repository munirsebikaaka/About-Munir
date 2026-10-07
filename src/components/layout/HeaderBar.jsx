import { Search, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
const HeaderBar = ({ title, subtitle }) => {
  const pathName = useLocation();

  const Input = () => {
    if (
      pathName.pathname.includes("/owner") ||
      pathName.pathname.includes("/projects")
    )
      return (
        <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-[#F6F9FB] px-3 py-2 text-sm text-[#4B4047] min-w-[220px]">
          <Search className="h-4 w-4 text-[#7E7B86]" />
          <input
            className="w-full border-0 bg-transparent text-sm text-[#0E0E11] placeholder:text-[#7E7B86] focus:outline-none"
            placeholder="Search projects..."
          />
        </div>
      );
  };
  return (
    <header className="flex items-center justify-between gap-4 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-[#0E0E11]">{title}</h1>
        <p className="text-sm text-[#4B4047]">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {Input()}
        <div className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F6F9FB] px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#CFE2FD] font-semibold text-[#295C9B]">
            M
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#0E0E11]">Munir</p>
            <p className="text-[11px] text-[#4B4047]">
              munirsebikaaka@gmail.com
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-[#4B4047]" />
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;

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
        <div className="flex items-center gap-2 rounded-xl border border-border bg-canvas px-3 py-2 text-sm text-text-secondary min-w-[220px]">
          <Search className="h-4 w-4 text-text-muted" />
          <input
            className="w-full border-0 bg-transparent text-sm text-foreground placeholder:text-text-muted focus:outline-none"
            placeholder="Search projects..."
          />
        </div>
      );
  };
  return (
    <header className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-4 py-3 shadow-sm">
      <div>
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
        <p className="text-sm text-text-secondary">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        {Input()}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-canvas px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-avatar font-semibold text-brand">
            M
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">Munir</p>
            <p className="text-[11px] text-text-secondary">
              munirsebikaaka@gmail.com
            </p>
          </div>
          <ChevronDown className="h-4 w-4 text-text-secondary" />
        </div>
      </div>
    </header>
  );
};

export default HeaderBar;

import {
  BriefcaseBusiness,
  Building2,
  LayoutDashboard,
  Users,
  PlusCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/useAuthData";
import Logo from "../../ui/Logo";

const Sidebar = () => {
  const { user } = useAuth();
  const isOwner = user?.role === "owner";

  const linkStyles = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? "bg-brand-soft text-brand shadow-sm"
        : "text-text-secondary hover:bg-canvas"
    }`;

  return (
    <aside className="sticky top-0 h-screen w-64 bg-surface border-r border-border px-4 py-5 flex flex-col flex-shrink-0">
      <Logo />

      <div className="mt-6 flex-1 overflow-y-auto">
        <nav className="mt-3 space-y-1">
          <NavLink to="/owner" className={linkStyles}>
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/projects" className={linkStyles}>
            <BriefcaseBusiness className="h-4 w-4" />
            <span>Projects</span>
          </NavLink>

          {isOwner && (
            <NavLink to="/register-site" className={linkStyles}>
              <Building2 className="h-4 w-4" />
              <span>Register Site</span>
            </NavLink>
          )}

          {isOwner && (
            <NavLink to="/register-worker" className={linkStyles}>
              <PlusCircle className="h-4 w-4" />
              <span>Register Worker</span>
            </NavLink>
          )}

          <NavLink to="/people" className={linkStyles}>
            <Users className="h-4 w-4" />
            <span>People</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

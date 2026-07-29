import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navStyles = (path) => {
    const styles = `hover:text-blue-500 transition duration-300 ${path === location.pathname && "text-blue-500"}`;
    return styles;
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-extrabold tracking-tight text-white">
          MUNIR<span className="text-blue-600">.</span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-10 font-medium text-sm text-slate-300">
          <NavLink to="/about" className={navStyles("/about")}>
            About
          </NavLink>

          <NavLink to="/skills" className={navStyles("/skills")}>
            Skills
          </NavLink>

          <NavLink to="/projects" className={navStyles("/projects")}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navStyles("/contact")}>
            Contact
          </NavLink>

          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300">
            Hire Me
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-300 hover:text-white transition">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm overflow-hidden bg-slate-900 border-l border-slate-800 transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex h-full flex-col px-6 py-8 text-slate-300 font-medium">
          <div className="flex items-center justify-between mb-10">
            <p className="text-lg font-semibold text-white">Menu</p>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-white transition">
              <X size={26} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-5">
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-blue-500 transition">
              About
            </NavLink>

            <NavLink
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-blue-500 transition">
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-blue-500 transition">
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-blue-500 transition">
              Contact
            </NavLink>
          </nav>

          <div className="mt-auto">
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl bg-blue-600 px-5 py-4 text-center font-semibold text-white transition hover:bg-blue-700">
              Hire Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

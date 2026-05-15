import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-tight text-white">
          MUNIR<span className="text-blue-600">.</span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-10 font-medium text-sm text-slate-300">
          <NavLink
            to="/about"
            className="hover:text-blue-500 transition duration-300">
            About
          </NavLink>

          <NavLink
            to="/skills"
            className="hover:text-blue-500 transition duration-300">
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            className="hover:text-blue-500 transition duration-300">
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-blue-500 transition duration-300">
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
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 opacity-100 border-t border-slate-800"
            : "max-h-0 opacity-0"
        }`}>
        <div className="px-6 py-6 bg-slate-900 flex flex-col space-y-5 text-slate-300 font-medium">
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition">
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition">
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition">
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-500 transition">
            Contact
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition">
            Hire Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

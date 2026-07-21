import { GitBranch, Mail, ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-slate-950 border-t border-slate-800 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              MUNIR<span className="text-blue-500">.</span>
            </h2>

            <p className="text-slate-400 mt-3 max-w-md leading-relaxed">
              Frontend developer passionate about building responsive web
              applications, mobile apps, and modern digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <NavLink
              to="/about"
              className="text-slate-400 hover:text-blue-400 transition">
              About
            </NavLink>

            <NavLink
              to="/skills"
              className="text-slate-400 hover:text-blue-400 transition">
              Skills
            </NavLink>

            <NavLink
              to="/projects"
              className="text-slate-400 hover:text-blue-400 transition">
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="text-slate-400 hover:text-blue-400 transition">
              Contact
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            <NavLink
              to="https://github.com/munirsebikaaka"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition">
              <GitBranch className="w-5 h-5" />
            </NavLink>

            <NavLink
              to="mailto:munirsebikaaka@gmail.com"
              className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition">
              <Mail className="w-5 h-5" />
            </NavLink>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Munir Sebikaaka. All rights reserved.
          </p>

          <NavLink
            to="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition">
            Back Home
            <ArrowUp className="w-4 h-4" />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

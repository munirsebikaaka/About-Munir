import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm mb-5">
            Frontend Developer • Kampala, Uganda
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Munir Sebikaaka
            </span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
            Frontend developer passionate about building responsive websites,
            mobile applications, and modern dashboard systems using React,
            TypeScript, Tailwind CSS, and React Native. I focus on creating
            fast, scalable, and user-friendly digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <NavLink
              to="/projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20">
              View Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="px-8 py-4 border border-slate-700 hover:border-blue-500 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-300">
              Contact Me
            </NavLink>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full border border-blue-500/20 bg-slate-900 overflow-hidden shadow-2xl shadow-blue-500/10">
              <img
                src="/munir.jpeg"
                alt="Munir Sebikaaka"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 bg-slate-900 border border-slate-700 px-5 py-3 rounded-2xl shadow-xl">
              <p className="text-white font-semibold text-sm">
                Frontend Developer
              </p>

              <p className="text-slate-400 text-xs mt-1">
                React • TypeScript • React Native
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

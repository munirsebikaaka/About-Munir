import {
  Code2,
  Smartphone,
  Palette,
  GitBranch,
  Database,
  Server,
  Layers3,
} from "lucide-react";

const skills = [
  {
    name: "React JSX",
    level: 95,
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    name: "JavaScript",
    level: 95,
    icon: <Layers3 className="w-5 h-5" />,
  },
  {
    name: "TypeScript",
    level: 70,
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "React Native",
    level: 85,
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    name: "Tailwind CSS",
    level: 95,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: "CSS",
    level: 90,
    icon: <Palette className="w-5 h-5" />,
  },
  {
    name: "Firebase",
    level: 85,
    icon: <Server className="w-5 h-5" />,
  },
  {
    name: "Supabase",
    level: 80,
    icon: <Database className="w-5 h-5" />,
  },
  {
    name: "GitHub",
    level: 90,
    icon: <GitBranch className="w-5 h-5" />,
  },
  {
    name: "REST APIs",
    level: 88,
    icon: <Server className="w-5 h-5" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
          Munir's Skills
        </p>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Technical Skills
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to design, build, and optimize modern
            web and mobile applications with clean user experiences and scalable
            architectures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8  mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/40 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                    {skill.icon}
                  </div>

                  <div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>

                    <p className="text-slate-500 text-sm">
                      Professional Experience
                    </p>
                  </div>
                </div>

                <span className="text-blue-400 font-bold text-sm">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                  }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">3+</h3>

            <p className="text-slate-400">Years of Experience</p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">10+</h3>

            <p className="text-slate-400">Completed Projects</p>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-6 text-center">
            <h3 className="text-4xl font-bold text-white mb-2">100%</h3>

            <p className="text-slate-400">Responsive Design Focus</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

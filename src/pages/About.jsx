import { Code2, Smartphone, LayoutDashboard, Rocket } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div>
          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            About Munir
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
            Passionate Frontend Developer Creating Modern Digital Experiences
            spgfx,g;srgkos;pk,;fdozi
          </h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-4">
            I'm{" "}
            <span className="text-white font-semibold">Munir Sebikaaka</span>, a
            frontend developer based in Kampala, Uganda with over three years of
            experience building responsive websites, mobile applications, and
            business dashboard systems.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg mb-4">
            I specialize in developing clean, scalable, and user-friendly
            interfaces using modern technologies like React, TypeScript,
            Tailwind CSS, React Native, Firebase, and Supabase. My focus is
            creating applications that not only look modern but also provide
            smooth user experiences and strong performance.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg mb-4">
            Learning & Growing: Constantly exploring new technologies and
            enjoying the process of continuous learning.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg mb-10">
            What I Love: Coding, collaborating, and working on projects that
            push the boundaries of web and mobile development. I’m passionate
            about React and all things related to mobile and web development.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-white font-semibold mb-2">Web Development</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Building responsive and scalable modern web applications with
                React and TypeScript.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-cyan-400" />
              </div>

              <h3 className="text-white font-semibold mb-2">Mobile Apps</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Developing smooth cross-platform mobile applications using React
                Native.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-indigo-400" />
              </div>

              <h3 className="text-white font-semibold mb-2">
                Dashboard Systems
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Creating business management systems with analytics and
                real-time data tracking.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>

              <h3 className="text-white font-semibold mb-2">
                Performance Focus
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                Optimizing applications for speed, responsiveness, and smooth
                user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </section>
  );
};
export default About;

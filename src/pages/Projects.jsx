import { ShoppingBag, MapPin, Building2, GitBranch } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    type: "Marketplace Web App",
    description:
      "A fully responsive marketplace platform built with React that allows users to both buy and sell products online. The application provides a modern shopping experience where sellers can upload products and buyers can browse, filter, and purchase items easily across all devices.",

    features: [
      "User product selling system",
      "Product upload and management",
      "Shopping cart functionality",
      "Dynamic product filtering and search",
      "Responsive marketplace interface",
      "Buyer and seller interaction flow",
      "Modern UI with smooth user experience",
    ],

    tech: ["React", "CSS", "JavaScript", "Firebase"],

    icon: <ShoppingBag className="text-blue-400 w-14 h-14 relative z-10" />,

    badgeColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",

    bg: "from-blue-500/10 to-cyan-500/10",
    githubLink: "https://github.com/munirsebikaaka/marketplace-app",
  },

  {
    title: "Mobile Parking System",
    type: "Mobile App",
    description:
      "A React Native mobile application that helps users locate available parking spaces in real time while improving navigation and reducing parking search time in busy areas.",

    features: [
      "Real-time parking space tracking",
      "Location-based services",
      "Interactive mobile interface",
      "Fast and responsive navigation",
      "Optimized mobile experience",
    ],

    tech: ["React Native", "Maps API", "Mobile Development"],

    icon: <MapPin className="text-cyan-400 w-14 h-14 relative z-10" />,

    badgeColor: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",

    bg: "from-cyan-500/10 to-blue-500/10",
    githubLink: "https://github.com/munirsebikaaka/react-native-parking-system",
  },

  {
    title: "Travel Memory App",
    type: "Mobile App",
    description:
      "A mobile application that allows users to save, organize, and revisit their travel experiences by storing memorable locations, notes, and travel moments in one place.",

    features: [
      "Save favorite travel locations",
      "Organize travel memories",
      "Mobile-friendly experience",
      "Interactive location management",
      "Clean and modern UI design",
    ],

    tech: ["React Native", "Navigation", "Mobile UI"],

    icon: <MapPin className="text-indigo-400 w-14 h-14 relative z-10" />,

    badgeColor: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",

    bg: "from-indigo-500/10 to-blue-500/10",
    githubLink: "https://github.com/munirsebikaaka/trips-app",
  },

  {
    title: "Branch Management System",
    type: "Dashboard System",
    description:
      "A business management dashboard developed to help business owners manage multiple branches from one centralized platform. The system enables users to monitor workers, products, branch activities, sales data, and analytics in real time.",

    features: [
      "Multi-branch management system",
      "Real-time branch analytics",
      "Product tracking across branches",
      "Branch activity monitoring",
      "Responsive admin dashboard",
      "Search and filtering functionality",
      "Performance optimization using React hooks",
    ],

    tech: ["React JSX", "Tailwind CSS", "Context API"],

    icon: <Building2 className="text-purple-400 w-14 h-14 relative z-10" />,

    badgeColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",

    bg: "from-purple-500/10 to-blue-500/10",
    githubLink: "https://github.com/munirsebikaaka/Branches-Managment-App",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
          Munir's Projects
        </p>
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects I have designed and developed using modern
            frontend and mobile technologies focused on solving real-world
            business problems and creating responsive user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2">
              <div className="h-56 bg-slate-900 flex items-center justify-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bg}`}></div>

                {project.icon}
              </div>

              <div className="p-7">
                <div className="lg:flex  items-center justify-between mb-4 gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full whitespace-nowrap ${project.badgeColor}`}>
                    {project.type}
                  </span>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.githubLink}
                    className="text-slate-400 flex items-center text-sm font-semibold hover:text-white transition">
                    GitHub
                    <GitBranch className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

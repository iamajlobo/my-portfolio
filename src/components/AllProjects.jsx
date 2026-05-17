import project1 from "../assets/images/sample.png";
import project2 from "../assets/images/sample.png";
import project3 from "../assets/images/sample.png";

import coin from "../assets/images/coin.png";
import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "E-Learning Dashboard",
    description:
      "Interactive Power BI dashboard for analyzing student engagement, course performance, and learning trends.",
    image: project1,
    tech: ["Power BI", "DAX", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "Modern gaming-inspired portfolio website with responsive UI, animations, and interactive sections.",
    image: project2,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application with task tracking, authentication, and real-time updates.",
    image: project3,
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
    {
    title: "E-Learning Dashboard",
    description:
      "Interactive Power BI dashboard for analyzing student engagement, course performance, and learning trends.",
    image: project1,
    tech: ["Power BI", "DAX", "SQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Developer Portfolio",
    description:
      "Modern gaming-inspired portfolio website with responsive UI, animations, and interactive sections.",
    image: project2,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity application with task tracking, authentication, and real-time updates.",
    image: project3,
    tech: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const AllProjects = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 pt-30  pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p
            className="
                        text-violet-400
                        uppercase
                        tracking-[0.3em]
                        text-sm
                        mb-4
                    "
          >
            Portfolio Showcase
          </p>

          <h1
            className="
                        text-5xl
                        md:text-6xl
                        font-extrabold
                    "
          >
            Explore My
            <span className="text-violet-500"> Projects</span>
          </h1>

          <p
            className="
                        text-gray-400
                        max-w-2xl
                        mx-auto
                        mt-6
                        text-lg
                    "
          >
            A collection of projects focused on clean design, responsive
            interfaces, and real-world functionality built with modern web
            technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                                group
                                bg-white/5
                                border border-white/10
                                rounded-3xl
                                overflow-hidden
                                backdrop-blur-xl
                                hover:border-violet-500/40
                                hover:-translate-y-2
                                transition-all duration-500
                                shadow-xl
                            "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                                        w-full
                                        h-60
                                        object-cover
                                        group-hover:scale-110
                                        transition-transform duration-700
                                    "
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Title */}
                <div>
                  <h2
                    className="
                                        text-2xl
                                        font-bold
                                        mb-3
                                        group-hover:text-violet-400
                                        transition-colors
                                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                                        text-gray-400
                                        leading-relaxed
                                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, idx) => (
                    <div
                      key={idx}
                      className="
                                                flex items-center gap-2
                                                bg-violet-500/10
                                                border border-violet-500/20
                                                px-3 py-1.5
                                                rounded-full
                                                text-sm
                                            "
                    >
                      <img src={coin} alt="coin" className="w-4" />
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                                            flex-1
                                            flex items-center justify-center gap-2
                                            bg-white/5
                                            border border-white/10
                                            hover:bg-white/10
                                            py-3
                                            rounded-2xl
                                            transition-all duration-300
                                        "
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                                            flex-1
                                            flex items-center justify-center gap-2
                                            bg-violet-600
                                            hover:bg-violet-500
                                            py-3
                                            rounded-2xl
                                            transition-all duration-300
                                            hover:scale-105
                                        "
                  >
                    <ExternalLink size={18} />
                    Live Demo
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

export default AllProjects;

import { useSelector } from "react-redux";

export default function Projects() {
  // Fetch projects list from Redux Store
  const projectsList = useSelector((state) => state.projects.list);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background glow blur */}
      <div className="absolute bottom-12 left-1/4 w-[350px] h-[350px] bg-violet-900/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
          Featured Projects
        </h2>
        <div className="w-16 h-1.5 bg-violet-500 rounded-full mt-3" />
        <p className="text-slate-400 mt-4 max-w-xl text-sm sm:text-base">
          A showcase of recent frontend projects representing responsive design, state management, and modern user experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {projectsList.map((project, idx) => (
          <div
            key={project.id || idx}
            className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-violet-500/20 transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-violet-950/20"
          >
            {/* Card Mockup Visual Container */}
            <div className="relative aspect-video overflow-hidden border-b border-white/5 bg-slate-950">
              <div className="absolute inset-0 bg-black/10 z-10 transition duration-300 group-hover:bg-transparent" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow text-left space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight group-hover:text-violet-300 transition duration-300">
                {project.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-xs font-semibold text-slate-300 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                {/* Live Demo */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>Live Demo</span>
                </a>

                {/* GitHub repository */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-card hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl border border-white/10 transition duration-200"
                  aria-label="View Github Repository"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

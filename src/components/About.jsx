export default function About() {
  const experiences = [
    {
      role: "Frontend Developer (Personal Projects)",
      company: "Self-Employed / Independent",
      duration: "2025 - Present",
      description: "Building personal web applications and portfolio projects using React and modern frontend technologies while learning full-stack development and UI design.",
      tech: ["React.js", "Vite", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      role: "AI/ML & CS Student",
      company: "ITM Skills University",
      duration: "2025 - Present",
      description: "Pursuing B.Tech in Computer Science with specialization in AI/ML while learning programming fundamentals, DSA, databases, and software development.",
      tech: ["C++", "Python", "Git", "VS Code"]
    },
    {
      role: "Open Source & Project Learner",
      company: "Personal Learning Journey",
      duration: "2024 - Present",
      description: "Exploring modern development tools, experimenting with app ideas, and learning frontend/backend technologies through self-driven projects and tutorials.",
      tech: ["GitHub", "React", "Flask", "Firebase", "Tailwind CSS"]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
          About Me
        </h2>
        <div className="w-16 h-1.5 bg-violet-500 rounded-full mt-3" />
        <p className="text-slate-400 mt-4 max-w-xl text-sm sm:text-base">
          A brief overview of who I am, my core mission, and my learning path so far.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography & Passion */}
        <div className="md:col-span-5 space-y-6 text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Designing Interfaces, <br />
            Exploring Intellect.
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I’m a Computer Science (AI/ML) student at ITM Skills University with a strong interest in web development, AI-powered applications, and problem solving. 
            I enjoy building projects using React, Vite, JavaScript, Tailwind CSS, and modern frontend tools while continuously improving my DSA and backend development skills.
          </p>
          <p className="text-slate-400 leading-relaxed text-sm">
            I like creating clean, interactive, and user-friendly applications that solve real-world problems. 
            Currently, I’m focused on learning full-stack development step by step and building impactful portfolio projects.
          </p>
          
          {/* Accent Box */}
          <div className="glass-card p-6 rounded-2xl border-l-4 border-violet-500 text-slate-300 italic text-sm">
            "Learn by building, improve by experimenting."
          </div>
        </div>

        {/* Right Column: Timeline of Experience */}
        <div className="md:col-span-7 space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 text-left">
            My Journey
          </h3>
          
          <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 text-left">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-violet-500 group-hover:bg-violet-400 transition-all duration-300 shadow-md shadow-violet-500/20" />
                
                {/* Timeline Item */}
                <div className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-violet-500/20 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 mb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight group-hover:text-violet-300 transition duration-300">
                        {exp.role}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/40 border border-violet-500/10 px-2.5 py-1 rounded-full w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

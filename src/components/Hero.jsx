import { Link } from "react-router-dom";
import heroImage from "../assets/hero_illustration.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-violet-600/20 blur-3xl animate-pulse-slow z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl animate-pulse-slow-delayed z-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Text Content */}
        <div className="md:col-span-7 text-left space-y-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/5 text-xs font-semibold tracking-wider text-violet-300 uppercase w-fit">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Learning & building phase
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight leading-none text-white font-display">
            Hi, I'm <span className="text-gradient-purple-cyan">Shankar Mupanna</span>
            <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-semibold font-sans">
              Frontend Developer & AI/ML Student
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
            I build modern web applications and creative tech projects while exploring AI/ML, full-stack development, and problem solving.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-8 py-3.5 rounded-xl hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-violet-950/40 hover:scale-[1.02] active:scale-[0.98] transition duration-250 font-display tracking-wide"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:bg-white/10 text-white border border-white/10 font-medium px-8 py-3.5 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition duration-250 font-display tracking-wide flex items-center gap-2"
            >
              <span>Download Resume</span>
              <svg
                className="w-4 h-4 text-slate-300 group-hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
          
          {/* Quick Metrics in Hero */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white font-display">Beginner</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Developer Status</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white font-display">5+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Projects Completed</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white font-display">Learning</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Current Phase</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Illustration Container */}
        <div className="md:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-3 glass-card border border-white/10 shadow-2xl animate-float">
            {/* Glowing background inside border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-cyan-500/10 rounded-3xl z-0" />
            <img
              src="https://images.pexels.com/photos/34212916/pexels-photo-34212916/free-photo-of-colorful-computer-programming-workspace-setup.jpeg?w=1260&h=750&dpr=2"
              alt="Developer Workstation 3D Mockup"
              className="w-full h-full object-cover rounded-2xl relative z-10 shadow-lg select-none"
            />
            {/* Floating indicator */}
            <div className="absolute -bottom-4 -left-4 glass-card border border-white/10 px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl z-20 animate-float-delayed">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
              </span>
              <div className="text-left">
                <p className="text-xs font-semibold text-white">Coding Live</p>
                <p className="text-[10px] text-slate-400">Vite React App</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

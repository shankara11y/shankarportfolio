import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative font-sans overflow-x-hidden selection:bg-violet-500 selection:text-white flex flex-col">
      {/* Scroll indicator reset */}
      <ScrollToTop />

      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[30%] left-[-100px] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-100px] w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Navigation */}
      <Navbar />

      {/* Router Switchable Pages */}
      <main className="relative z-10 flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-slate-950 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <Link
              to="/"
              className="text-xl font-bold font-display tracking-tight flex items-center gap-1 group"
            >
              <span>Shankar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-130 transition duration-300"></span>
            </Link>
            <p className="text-xs text-slate-500">
              Building the future of the web, one pixel at a time.
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <li>
              <Link to="/about" className="hover:text-white transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="hover:text-white transition duration-200">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white transition duration-200">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition duration-200">
                Contact
              </Link>
            </li>
          </ul>

          {/* Socials & Copyright */}
          <div className="flex flex-col items-center md:items-end text-center md:text-left space-y-2">
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-200" aria-label="GitHub Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition duration-200" aria-label="LinkedIn Profile">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-[10px] text-slate-600">
              &copy; {currentYear} Shankar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

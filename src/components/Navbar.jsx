import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-2xl font-bold font-display tracking-tight flex items-center gap-1 group"
        >
          <span>Shankar</span>
          <span className="w-2 h-2 rounded-full bg-violet-500 group-hover:scale-130 transition duration-300"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-1 text-slate-300 hover:text-white transition duration-250 ${
                      isActive ? "text-violet-400 font-semibold" : ""
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-violet-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="text-xs uppercase tracking-wider font-semibold font-display bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-violet-500 hover:text-white transition duration-300 shadow-md shadow-black/10"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          id="menu-toggle"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-slate-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[300px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-2 rounded-lg transition duration-200 ${
                    isActive ? "text-violet-400 font-semibold" : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="w-full text-center px-6 pt-3 border-t border-white/5">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block w-full bg-violet-600 hover:bg-violet-700 text-white font-medium px-5 py-3 rounded-xl transition duration-250 shadow-md shadow-violet-950/50"
            >
              Let's Talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

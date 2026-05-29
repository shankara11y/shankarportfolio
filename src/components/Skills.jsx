export default function Skills() {
  const skillCategories = [
    {
      title: "Core Frontend",
      skills: [
        {
          name: "HTML5",
          level: "Advanced",
          color: "hover:border-orange-500/30 hover:shadow-orange-500/10",
          textColor: "group-hover:text-orange-500",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm16.14 7.682H8.056l-.234-2.628h11.23L19.29 2.6H4.71l.732 8.214h9.11l-.265 2.973L12 14.498l-2.285-.623-.146-1.64h-2.62l.29 3.27 4.76 1.306 4.765-1.307.567-6.388z" fill="#e34f26" />
            </svg>
          )
        },
        {
          name: "CSS3",
          level: "Advanced",
          color: "hover:border-blue-500/30 hover:shadow-blue-500/10",
          textColor: "group-hover:text-blue-500",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 0h21l-1.91 21.563L12 24l-8.59-2.437L1.5 0zm16.035 7.682l-.46 5.166L12 14.498l-5.075-1.65-.246-2.766h2.62l.135 1.517 2.566.837 2.565-.838.256-2.88H4.71l.246-2.767H19.29z" fill="#1572b6" />
            </svg>
          )
        },
        {
          name: "JavaScript",
          level: "Intermediate",
          color: "hover:border-yellow-500/30 hover:shadow-yellow-500/10",
          textColor: "group-hover:text-yellow-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v18H3V3z" fill="#f7df1e" />
              <path d="M21 21h-4v-4h4v4zm-6.5-2.2v-1.6c0-1 .5-1.5 1.5-1.5.8 0 1.2.4 1.2 1.2v.2h1.6v-.2c0-1.7-1-2.7-2.8-2.7-1.8 0-3 1.1-3 3.1v1.6c0 2 1.1 3.1 3 3.1 1.8 0 2.8-1 2.8-2.7v-.2h-1.6v.2c0 .8-.4 1.2-1.2 1.2-1 0-1.5-.5-1.5-1.5z" fill="#000" />
            </svg>
          )
        },
        {
          name: "Tailwind CSS",
          level: "Intermediate",
          color: "hover:border-sky-400/30 hover:shadow-sky-400/10",
          textColor: "group-hover:text-sky-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38bdf8" />
            </svg>
          )
        }
      ]
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        {
          name: "React.js",
          level: "Intermediate",
          color: "hover:border-cyan-400/30 hover:shadow-cyan-400/10",
          textColor: "group-hover:text-cyan-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" stroke="#61dafb" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="#61dafb" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="#61dafb" />
              <circle cx="12" cy="12" r="1.5" fill="#61dafb" stroke="#61dafb" />
            </svg>
          )
        },
        {
          name: "Vite",
          level: "Intermediate",
          color: "hover:border-violet-500/30 hover:shadow-violet-500/10",
          textColor: "group-hover:text-violet-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.15 2.58a.5.5 0 0 0-.74-.18L1.64 16.24a.5.5 0 0 0 .27.88h7.94l-2.06 6.3a.5.5 0 0 0 .86.46l14.37-14.7a.5.5 0 0 0-.25-.82h-7.9l6.32-5.78z" fill="url(#viteGradient)" />
              <defs>
                <linearGradient id="viteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#41d1ff" />
                  <stop offset="25%" stopColor="#bd34fe" />
                  <stop offset="100%" stopColor="#ffea79" />
                </linearGradient>
              </defs>
            </svg>
          )
        },
        {
          name: "Redux",
          level: "Learning",
          color: "hover:border-purple-500/30 hover:shadow-purple-500/10",
          textColor: "group-hover:text-purple-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.6l-9-5.2V6.8l9-5.2 9 5.2v9.6l-9 5.2zm-7.6-6l7.6 4.4 7.6-4.4v-8l-7.6-4.4-7.6 4.4v8zm6.6-8.3c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0c.6.6.6 1.5 0 2.1-.3.3-.7.4-1 .4s-.8-.1-1.1-.4zm.8 4.4h.6v2.3h-.6v-2.3z" fill="#764abc" />
            </svg>
          )
        },
        {
          name: "Framer Motion",
          level: "Learning",
          color: "hover:border-pink-500/30 hover:shadow-pink-500/10",
          textColor: "group-hover:text-pink-450",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h12l12 12H12L0 24V12h12L0 0z" fill="url(#framerGradient)" />
              <defs>
                <linearGradient id="framerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff007f" />
                  <stop offset="50%" stopColor="#7f00ff" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>
            </svg>
          )
        }
      ]
    },
    {
      title: "Backend & Dev Tools",
      skills: [
        {
          name: "Python",
          level: "Intermediate",
          color: "hover:border-yellow-500/30 hover:shadow-yellow-500/10",
          textColor: "group-hover:text-yellow-450",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.77h-3.61c-.5 0-.9.41-.9.9v1.17c0 .5.4.9.9.9h5.36c.9 0 1.66-.73 1.66-1.65V2.36c0-.9-.76-1.65-1.66-1.65H14.25zm-9 9c-.9 0-1.66.73-1.66 1.65v2.77h3.61c.5 0 .9-.41.9-.9v-1.17c0-.5-.4-.9-.9-.9H5.25z" fill="#3776ab" />
              <path d="M9.75 23.82c-.9 0-1.66-.73-1.66-1.65v-2.77h3.61c.5 0 .9-.41.9-.9v-1.17c0-.5-.4-.9-.9-.9H4.34c-.9 0-1.66.73-1.66 1.65v2.77c0 .9.76 1.65 1.66 1.65H9.75zm9-9c.9 0 1.66-.73 1.66-1.65v-2.77h-3.61c-.5 0-.9.41-.9.9v1.17c0 .5.4.9.9.9h2.8z" fill="#ffe873" />
            </svg>
          )
        },
        {
          name: "Flask",
          level: "Learning",
          color: "hover:border-teal-400/30 hover:shadow-teal-400/10",
          textColor: "group-hover:text-teal-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 3h6M10 3v6l-4 8a2 2 0 001.8 2.8h8.4A2 2 0 0018 17l-4-8V3" stroke="#008080" />
              <line x1="7.5" y1="14" x2="16.5" y2="14" stroke="#008080" />
            </svg>
          )
        },
        {
          name: "Firebase",
          level: "Learning",
          color: "hover:border-amber-500/30 hover:shadow-amber-500/10",
          textColor: "group-hover:text-amber-500",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.89 15.572L6.105 1.229c.148-.962 1.341-1.303 1.956-.554L20.25 15.572H3.89z" fill="#ffca28" />
              <path d="M3.89 15.572L9.208 8.847c.451-.571 1.332-.571 1.782 0l2.583 3.267-9.683 3.458z" fill="#ffa000" />
              <path d="M12 24l-9.67-4.942a1.118 1.118 0 01-.618-.992V15.57L12 24z" fill="#f44336" />
            </svg>
          )
        },
        {
          name: "VS Code",
          level: "Expert",
          color: "hover:border-blue-600/30 hover:shadow-blue-600/10",
          textColor: "group-hover:text-blue-500",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.984 6.643l-3.328-3.376c-.23-.232-.602-.232-.832 0l-9.878 9.948-4.048-4.077c-.23-.232-.602-.232-.832 0L1.738 12.51c-.23.232-.23.61 0 .841l3.328 3.376c.23.232.602.232.832 0l9.878-9.948 4.048 4.077c.23.232.602.232.832 0l3.328-3.372c.23-.232.23-.61 0-.841z" fill="#007acc" />
            </svg>
          )
        },
        {
          name: "Git & GitHub",
          level: "Intermediate",
          color: "hover:border-slate-500/30 hover:shadow-slate-500/10",
          textColor: "group-hover:text-slate-300",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          )
        },
        {
          name: "Node.js",
          level: "Learning",
          color: "hover:border-green-500/30 hover:shadow-green-500/10",
          textColor: "group-hover:text-green-400",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.002 21.614c-.161 0-.323-.043-.466-.128L4.697 17.61a.936.936 0 0 1-.466-.807V9.198c0-.322.164-.622.441-.788l6.839-4.103a.925.925 0 0 1 .925 0l6.839 4.103c.277.166.441.466.441.788v7.605c0 .323-.173.642-.466.807l-6.839 3.876c-.143.085-.305.128-.466.128zm-6.837-5.258 6.837 3.876 6.837-3.876v-6.73L12 5.518 5.165 9.626v6.73z" fill="#339933" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/30 relative border-y border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-900/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1.5 bg-violet-500 rounded-full mt-3" />
          <p className="text-slate-400 mt-4 max-w-xl text-sm sm:text-base">
            My technology stack, tools, and platforms that I use to build applications and explore AI/ML solutions.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-lg sm:text-xl font-bold font-display text-slate-300 text-left border-l-2 border-violet-500 pl-3">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`group glass-card p-5 rounded-2xl border border-white/5 hover:border-slate-500/20 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg ${skill.color}`}
                  >
                    <div className="p-3 bg-white/5 rounded-xl mb-4 group-hover:scale-110 transition duration-300">
                      {skill.icon}
                    </div>
                    
                    <h4 className={`text-sm sm:text-base font-bold text-white transition duration-250 ${skill.textColor}`}>
                      {skill.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

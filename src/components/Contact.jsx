import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm, resetStatus } from "../store/contactSlice";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const dispatch = useDispatch();
  
  const { status } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    
    dispatch(submitContactForm(formData));
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => {
      dispatch(resetStatus());
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background glow accent */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
          Get In Touch
        </h2>
        <div className="w-16 h-1.5 bg-violet-500 rounded-full mt-3" />
        <p className="text-slate-400 mt-4 max-w-xl text-sm sm:text-base">
          Have an exciting project in mind or want to talk about opportunities? Drop a message!
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Column: Contact info & Socials */}
        <div className="md:col-span-5 text-left space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Let's build something <br />
              great together.
            </h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Feel free to reach out via the form, send a direct email, or connect with me on professional networks.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email card */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 group-hover:bg-violet-900/25 border border-white/5 group-hover:border-violet-500/25 rounded-xl transition duration-300">
                <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email Me</p>
                <a href="mailto:smupanna@gmail.com" className="text-sm sm:text-base font-bold text-white hover:text-violet-300 transition">
                  smupanna@gmail.com
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Location</p>
                <p className="text-sm sm:text-base font-bold text-white">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="pt-6 border-t border-white/5 space-y-4">
            <h4 className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Follow Me</h4>
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/shankara11y"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-violet-900/20 border border-white/5 hover:border-violet-500/20 rounded-xl transition duration-300 text-slate-400 hover:text-white"
                aria-label="GitHub Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shankar-mupanna-07b33736a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-violet-900/20 border border-white/5 hover:border-violet-500/20 rounded-xl transition duration-300 text-slate-400 hover:text-white"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rohit Patil"
                className="w-full bg-slate-950 border border-white/5 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                required
                disabled={status === "sending" || status === "success"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="rohit@gmail.com"
                className="w-full bg-slate-950 border border-white/5 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-200"
                required
                disabled={status === "sending" || status === "success"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-slate-950 border border-white/5 focus:border-violet-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition duration-200 resize-none"
                required
                disabled={status === "sending" || status === "success"}
              />
            </div>

            <button
              type="submit"
              className={`w-full font-display font-semibold tracking-wide text-sm py-3.5 px-6 rounded-xl transition duration-250 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 ${
                status === "sending"
                  ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                  : status === "success"
                  ? "bg-green-600 text-white"
                  : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-950/20"
              }`}
              disabled={status === "sending" || status === "success"}
            >
              {status === "sending" && (
                <>
                  <svg className="animate-spin h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Message...</span>
                </>
              )}
              {status === "success" && (
                <>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Message Sent Successfully!</span>
                </>
              )}
              {status === "idle" && <span>Send Message</span>}
              {status === "error" && <span className="text-red-300">Please fill all fields!</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

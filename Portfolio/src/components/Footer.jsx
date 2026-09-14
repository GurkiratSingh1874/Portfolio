import React from 'react';

function Footer() {
  return (
    <footer id="Footer" className="relative mt-20 border-t border-slate-800/80 bg-slate-950/90 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-12 border-b border-slate-800/80">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
              Get in Touch
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Let's Build Something Exceptional
            </h3>
            <p className="text-slate-400 text-sm md:text-base max-w-lg font-light">
              Actively exploring software engineering opportunities, full-stack development roles, and impactful engineering teams.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/Gurkirat_Singh_Resume.pdf"
              download="Gurkirat_Singh_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs md:text-sm font-semibold transition-all duration-200 shadow-md shadow-emerald-950/60 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>

            <a
              href="mailto:gurkiratsingh1874@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white text-xs md:text-sm font-semibold transition-all duration-200 border border-slate-700/80 hover:border-indigo-400 hover:scale-105"
            >
              Email
            </a>

            <a
              href="tel:+919988393184"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white text-xs md:text-sm font-semibold transition-all duration-200 border border-slate-700/80 hover:border-indigo-400 hover:scale-105"
            >
              +91-9988393184
            </a>

            <a
              href="https://github.com/GurkiratSingh1874"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white text-xs md:text-sm font-semibold transition-all duration-200 border border-slate-700/80 hover:scale-105"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gurkirat-singh-1a115a28a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/80 hover:bg-[#0077b5] text-white text-xs md:text-sm font-semibold transition-all duration-200 border border-slate-700/80 hover:scale-105"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs md:text-sm text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Gurkirat Singh. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="#About" className="hover:text-white transition-colors">About</a>
            <a href="#Skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#Experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#Projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="text-indigo-400 hover:text-white transition-colors">↑ Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 md:px-6 max-w-5xl mx-auto w-full">
      <nav className="flex items-center justify-between px-5 py-2.5 rounded-full bg-slate-950/80 backdrop-blur-xl border border-slate-800/90 shadow-2xl shadow-black/60">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white flex items-center justify-center font-extrabold text-xs shadow-md shadow-indigo-900/50 group-hover:scale-110 transition-transform">
            GS
          </span>
          <span className="text-base font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            Gurkirat<span className="text-indigo-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7 font-medium text-sm text-slate-300">
          <li>
            <a href="#About" className="hover:text-white transition-colors duration-150">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-white transition-colors duration-150">
              Skills
            </a>
          </li>
          <li>
            <a href="#Experience" className="hover:text-white transition-colors duration-150">
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-white transition-colors duration-150">
              Projects
            </a>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Gurkirat_Singh_Resume.pdf"
            download="Gurkirat_Singh_Resume.pdf"
            className="py-1.5 px-4 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 text-xs font-semibold shadow-sm shadow-emerald-950/30"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          <a
            href="#Footer"
            className="py-1.5 px-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 hover:scale-105 text-xs font-semibold shadow-md shadow-indigo-950/60"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800 shadow-2xl animate-fadeIn">
          <ul className="flex flex-col gap-3.5 font-medium text-slate-300 text-sm">
            <li>
              <a
                href="#About"
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                onClick={() => setMenuOpen(false)}
                className="block py-1.5 hover:text-white"
              >
                Projects
              </a>
            </li>
            <li className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
              <a
                href="/Gurkirat_Singh_Resume.pdf"
                download="Gurkirat_Singh_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-2 px-3 rounded-full bg-emerald-600 text-white font-semibold text-xs"
              >
                Resume
              </a>
              <a
                href="#Footer"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-2 px-3 rounded-full bg-indigo-600 text-white font-semibold text-xs"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;

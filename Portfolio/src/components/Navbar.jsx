import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#171d32]/90 backdrop-blur-md border-b border-slate-800/60">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:px-16">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-[#465697] text-white flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
            GS
          </span>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
            Gurkirat<span className="text-[#687cca]">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <li>
            <a href="#About" className="hover:text-white transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#Skills" className="hover:text-white transition-colors duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#Experience" className="hover:text-white transition-colors duration-200">
              Experience
            </a>
          </li>
          <li>
            <a href="#Projects" className="hover:text-white transition-colors duration-200">
              Projects
            </a>
          </li>
          <li>
            <a
              href="/Gurkirat_Singh_Resume.pdf"
              download="Gurkirat_Singh_Resume.pdf"
              className="py-1.5 px-3.5 rounded-full border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 text-xs font-semibold"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </li>
          <li>
            <a
              href="#Footer"
              className="py-2 px-4 rounded-full bg-[#465697] text-white hover:bg-[#586cb5] transition-all duration-200 hover:scale-105"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-[#101424] border-b border-slate-800 animate-fadeIn">
          <ul className="flex flex-col gap-4 font-medium text-slate-300 text-base">
            <li>
              <a
                href="#About"
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Skills"
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-white"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-white"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-white"
              >
                Projects
              </a>
            </li>
            <li className="flex items-center gap-3 pt-2">
              <a
                href="/Gurkirat_Singh_Resume.pdf"
                download="Gurkirat_Singh_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-1.5 py-2 px-4 rounded-full bg-emerald-600 text-white font-semibold text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
              <a
                href="#Footer"
                onClick={() => setMenuOpen(false)}
                className="inline-block py-2 px-4 rounded-full bg-[#465697] text-white font-semibold text-sm"
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

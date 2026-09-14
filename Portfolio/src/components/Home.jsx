import React from 'react';
import TextChange from './TextChange';
import photoImg from "../assets/gurkirat_photo.jpg";

function Home() {
  return (
    <section className="text-white max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 gap-12">
      <div className="md:w-3/5 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Available for Software Engineering Roles
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
          <TextChange />
        </h1>

        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl font-light">
          Computer Science undergraduate at <span className="text-white font-medium">Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar)</span>. Passionate about full-stack engineering, AI/RAG architectures, and crafting high-performance systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="/Gurkirat_Singh_Resume.pdf"
            download="Gurkirat_Singh_Resume.pdf"
            className="text-white py-2.5 px-6 text-sm md:text-base hover:opacity-95 duration-300 hover:scale-105 font-semibold rounded-full bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/50 inline-flex items-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>

          <button
            onClick={() => {
              document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white py-2.5 px-6 text-sm md:text-base hover:opacity-90 duration-300 hover:scale-105 font-semibold rounded-full bg-[#465697] shadow-lg shadow-indigo-950/60 cursor-pointer"
          >
            Explore Projects
          </button>

          <button
            onClick={() => {
              document.getElementById('Footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-indigo-200 py-2.5 px-6 text-sm md:text-base hover:bg-slate-800/80 duration-300 hover:scale-105 font-semibold rounded-full bg-slate-900/80 border border-indigo-500/30 cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Quick Contact Chips */}
        <div className="flex flex-wrap items-center gap-4 pt-4 text-xs md:text-sm text-slate-400">
          <a
            href="mailto:gurkiratsingh1874@gmail.com"
            className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            gurkiratsingh1874@gmail.com
          </a>
          <span className="text-slate-600">•</span>
          <a
            href="tel:+919988393184"
            className="inline-flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
          >
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91-9988393184
          </a>
        </div>
      </div>

      {/* Professional Portrait with Glow */}
      <div className="md:w-2/5 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-[#465697] rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden border-2 border-indigo-400/40 shadow-2xl shadow-indigo-950/80 w-64 sm:w-72 md:w-80 aspect-square">
            <img
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              src={photoImg}
              alt="Gurkirat Singh"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

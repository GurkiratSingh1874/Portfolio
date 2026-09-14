import React from 'react';
import TextChange from './TextChange';
import photoImg from "../assets/gurkirat_photo.jpg";

function Home() {
  return (
    <section className="text-white max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 pt-12 pb-20 md:pt-20 md:pb-28 gap-14">
      <div className="lg:w-3/5 space-y-7">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-mono shadow-inner shadow-indigo-950/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for Software Engineering Roles & Internships
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase font-mono">
            Hello, Welcome to my space
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight min-h-[4.5rem] sm:min-h-[5.5rem] md:min-h-[6.5rem] bg-gradient-to-r from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
            <TextChange />
          </h1>
        </div>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl font-light">
          Computer Science undergraduate at <span className="text-white font-medium">Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar)</span>. Architecting modern web applications, scalable REST APIs, and Retrieval-Augmented Generation (RAG) AI systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="/Gurkirat_Singh_Resume.pdf"
            download="Gurkirat_Singh_Resume.pdf"
            className="text-white py-3 px-6 text-sm md:text-base hover:opacity-95 duration-300 hover:scale-105 font-bold rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-950/60 inline-flex items-center gap-2 cursor-pointer border border-emerald-400/20"
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
            className="text-white py-3 px-6 text-sm md:text-base hover:opacity-95 duration-300 hover:scale-105 font-bold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-950/60 cursor-pointer border border-indigo-400/20"
          >
            Explore Projects
          </button>

          <button
            onClick={() => {
              document.getElementById('Footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-indigo-200 py-3 px-6 text-sm md:text-base hover:bg-slate-800/90 duration-300 hover:scale-105 font-medium rounded-full bg-slate-900/80 border border-slate-700/80 cursor-pointer"
          >
            Contact Me
          </button>
        </div>

        {/* Quick Highlights / Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-xl md:text-2xl font-black text-white">NITJ</span>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">CSE B.Tech '27</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-xl md:text-2xl font-black text-indigo-300">8.01</span>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">Current CGPA</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-xl md:text-2xl font-black text-emerald-400">6+</span>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">Projects Built</p>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <span className="text-xl md:text-2xl font-black text-purple-400">MERN</span>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">Stack</p>
          </div>
        </div>
      </div>

      {/* Professional Portrait with Floating Glass Badge */}
      <div className="lg:w-2/5 flex justify-center">
        <div className="relative group">
          {/* Ambient Glow Halo */}
          <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-700"></div>

          <div className="relative rounded-[2rem] overflow-hidden border-2 border-indigo-400/30 shadow-2xl shadow-black/80 w-64 sm:w-80 md:w-84 aspect-[4/5] bg-slate-950">
            <img
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src={photoImg}
              alt="Gurkirat Singh"
            />

            {/* Subtle bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

            {/* Floating Glass Pill on photo */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between shadow-xl">
              <div>
                <p className="text-white font-bold text-xs">Gurkirat Singh</p>
                <p className="text-[11px] text-indigo-300 font-mono">Software Engineer</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

import React from 'react';
import TextChange from './TextChange';
import avatarImg from "../assets/7358602-removebg-preview.png";

function Home() {
  return (
    <section className="text-white max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24 gap-10">
      <div className="md:w-3/5 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Available for Opportunities
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
          <TextChange />
        </h1>

        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl font-light">
          Computer Science undergraduate at <span className="text-white font-medium">NIT Jalandhar</span> passionate about building scalable full-stack web applications, AI-driven solutions, and robust systems.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
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
      </div>

      <div className="md:w-2/5 flex justify-center">
        <img
          className="w-64 sm:w-80 md:w-96 object-contain drop-shadow-[0_20px_40px_rgba(70,86,151,0.3)] animate-pulse hover:scale-105 transition-transform duration-500"
          src={avatarImg}
          alt="Gurkirat Singh Avatar"
        />
      </div>
    </section>
  );
}

export default Home;

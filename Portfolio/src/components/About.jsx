import React from 'react';
import AboutImg from "../assets/7358653-removebg-preview.png";

function About() {
  return (
    <section id="About" className="text-white max-w-7xl mx-auto px-6 md:px-20 py-16">
      <div className="bg-black/30 border border-slate-800/80 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/3 flex justify-center">
            <img
              className="w-64 md:w-80 object-contain drop-shadow-[0_10px_20px_rgba(70,86,151,0.25)]"
              src={AboutImg}
              alt="Gurkirat Singh Illustration"
            />
          </div>

          <div className="md:w-2/3">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
              Get To Know Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-1 mb-6 text-white">
              About Me
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6">
              I am a Computer Science & Engineering undergraduate at <span className="text-white font-semibold">Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar)</span>. I specialize in building responsive full-stack applications, integrating modern AI solutions such as RAG (Retrieval-Augmented Generation), and architecting clean, maintainable systems.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#465697]/30 text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-7-4-9 4 7 4zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Education</h4>
                    <p className="text-xs text-slate-400">B.Tech in CSE, NIT Jalandhar</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#465697]/30 text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm md:text-base">Focus Areas</h4>
                    <p className="text-xs text-slate-400">Full-Stack, AI/RAG & System Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

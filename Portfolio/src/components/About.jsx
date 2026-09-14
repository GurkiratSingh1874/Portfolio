import React from 'react';

function About() {
  return (
    <section id="About" className="text-white max-w-7xl mx-auto px-6 md:px-20 py-16">
      <div className="bg-black/30 border border-slate-800/80 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-sm">
        <div>
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
            Background & Profile
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-1 mb-6 text-white">
            About Me
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-4xl">
            I am a Computer Science & Engineering undergraduate at <span className="text-white font-semibold">Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar)</span> with a strong foundation in full-stack web engineering, Data Structures & Algorithms, and modern AI/RAG architectures. I enjoy taking complex real-world problems and translating them into robust, user-centric software solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-[#465697] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#465697]/30 text-indigo-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-7-4-9 4 7 4zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-indigo-500/40 pl-4">
                  <h4 className="font-semibold text-white text-base">NIT Jalandhar (Dr. B.R. Ambedkar NIT)</h4>
                  <p className="text-indigo-300 text-sm">B.Tech in Computer Science & Engineering</p>
                  <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                    <span>Expected Graduation: June 2027</span>
                    <span className="font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">CGPA: 8.01</span>
                  </div>
                </div>

                <div className="border-l-2 border-indigo-500/40 pl-4">
                  <h4 className="font-semibold text-white text-base">Rose Mary Convent School, Balluana</h4>
                  <p className="text-indigo-300 text-sm">Class XII, CBSE (2023)</p>
                  <p className="text-xs text-slate-400 mt-1">Percentage: <span className="font-semibold text-emerald-400">93%</span></p>
                </div>
              </div>
            </div>

            {/* Achievements & Leadership Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-[#465697] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#465697]/30 text-indigo-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Leadership & Involvement</h3>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-indigo-500/40 pl-4">
                  <h4 className="font-semibold text-white text-base">National Service Scheme (NSS) Volunteer</h4>
                  <p className="text-slate-300 text-sm mt-1">
                    Led a team of 10+ volunteers in organizing blood donation drives, health awareness sessions, and campus cleanliness initiatives.
                  </p>
                </div>

                <div className="border-l-2 border-indigo-500/40 pl-4">
                  <h4 className="font-semibold text-white text-base">SWRAC (Social Work & Rural Activity Club)</h4>
                  <p className="text-slate-300 text-sm mt-1">
                    Official club of NIT Jalandhar. Organized and engaged in rural educational and health empowerment programs.
                  </p>
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

import React from 'react';

const coursework = [
  "Data Structures & Algorithms (C++)",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
  "Object-Oriented Programming",
  "Machine Learning",
  "Cloud Computing",
  "Software Engineering",
];

function About() {
  return (
    <section id="About" className="text-white max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
          Profile & Foundation
        </span>
        <h2 className="text-3xl md:text-5xl font-black mt-1 text-white tracking-tight">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Bio Card */}
        <div className="md:col-span-2 p-7 md:p-9 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-500/30">
              <span>NIT Jalandhar</span>
              <span>•</span>
              <span>CSE Undergrad</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Building scalable digital systems with modern technologies and clean architecture.
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              I am a Computer Science & Engineering undergraduate at <strong className="text-white">Dr. B.R. Ambedkar National Institute of Technology (NIT Jalandhar)</strong>. My journey blends deep problem-solving skills with practical full-stack development, ranging from MERN stack applications to RAG (Retrieval-Augmented Generation) based AI solutions.
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 block">CURRENT LOCATION</span>
              <span className="text-white font-medium text-sm">Punjab, India</span>
            </div>
            <div>
              <span className="text-slate-500 block">PRIMARY FOCUS</span>
              <span className="text-white font-medium text-sm">Full-Stack & Applied AI</span>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-7-4-9 4 7 4zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Education</h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs font-mono text-indigo-300">2023 - 2027 (Expected)</span>
              <h4 className="font-bold text-white text-sm mt-0.5">NIT Jalandhar</h4>
              <p className="text-xs text-slate-400">B.Tech Computer Science & Engg</p>
              <div className="mt-2 inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                CGPA: 8.01
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <span className="text-xs font-mono text-slate-400">2023</span>
              <h4 className="font-bold text-white text-sm mt-0.5">Rose Mary Convent School</h4>
              <p className="text-xs text-slate-400">Class XII, CBSE</p>
              <div className="mt-2 inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                Score: 93%
              </div>
            </div>
          </div>
        </div>

        {/* Relevant Coursework Card */}
        <div className="p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Relevant Coursework</h3>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {coursework.map((course, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-950/60 text-slate-300 border border-slate-800 hover:border-indigo-400/40 hover:text-white transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* Leadership & Extracurriculars Card */}
        <div className="md:col-span-2 p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white">Leadership & Community Impact</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h4 className="font-bold text-white text-sm">National Service Scheme (NSS)</h4>
              <p className="text-xs text-indigo-300 font-mono mt-0.5">Team Lead Volunteer</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Led a team of 10+ volunteers organizing blood donation camps, health awareness drives, and community cleanliness campaigns.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <h4 className="font-bold text-white text-sm">SWRAC Club, NIT Jalandhar</h4>
              <p className="text-xs text-emerald-300 font-mono mt-0.5">Active Member</p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Social Work and Rural Activity Club. Organized rural development programs focused on student education and health empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

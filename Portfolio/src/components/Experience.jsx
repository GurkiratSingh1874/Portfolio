import React from 'react';
import imgINTERN from "../assets/1674385753078.jpeg";

function Experience() {
  const internSkills = ["MERN Stack", "React.js", "Express.js", "Node.js", "MongoDB", "RESTful APIs"];

  return (
    <section id="Experience" className="p-6 md:p-16 max-w-7xl mx-auto text-white">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
          Career Milestone
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-1 tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="relative pl-6 md:pl-10 border-l-2 border-indigo-500/30 space-y-10">
        <div className="relative group">
          {/* Glowing Timeline Dot */}
          <span className="absolute -left-[31px] md:-left-[47px] top-3 h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-4 ring-[#080c18] group-hover:scale-125 transition-transform" />

          <div className="p-7 md:p-9 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-indigo-950/30">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <img
                  src={imgINTERN}
                  alt="ScrollAR4u Technologies"
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-700 bg-slate-950 shadow-md"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    Software Developer Intern
                  </h3>
                  <p className="text-indigo-300 font-medium text-sm md:text-base">
                    ScrollAR4u Technologies Pvt. Ltd., Bathinda
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-500/30 self-start sm:self-auto shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                June 2025 - July 2025
              </span>
            </div>

            <ul className="space-y-3 text-slate-300 text-sm md:text-base pl-2">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Collaborated in full-stack web development utilizing the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js) to engineer scalable features.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Developed responsive, modern user interfaces using React.js and reusable component libraries.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Integrated RESTful APIs to enable dynamic and secure data exchange between the frontend and backend systems.</span>
              </li>
            </ul>

            {/* Tech badges used in internship */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
              {internSkills.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-950/80 text-indigo-200 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

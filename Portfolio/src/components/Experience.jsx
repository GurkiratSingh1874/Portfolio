import React from 'react';
import imgINTERN from "../assets/1674385753078.jpeg";

function Experience() {
  return (
    <section id="Experience" className="p-8 md:p-20 text-white max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
          Career Journey
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-1">
          Work Experience
        </h2>
      </div>

      <div className="relative pl-6 md:pl-8 border-l-2 border-indigo-500/30 space-y-8">
        <div className="relative">
          {/* Timeline Dot */}
          <span className="absolute -left-[31px] md:-left-[39px] top-1.5 h-4 w-4 rounded-full bg-[#465697] border-4 border-[#171d32]" />

          <div className="bg-black/30 border border-slate-800/80 hover:border-[#465697] transition-all duration-300 rounded-2xl p-6 md:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={imgINTERN}
                  alt="ScrollAR4U Technologies"
                  className="w-14 h-14 rounded-xl object-cover border border-slate-700 bg-slate-900"
                />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Software Developer Intern
                  </h3>
                  <p className="text-indigo-300 font-medium text-sm md:text-base">
                    ScrollAR4u Technologies Pvt. Ltd., Bathinda
                  </p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#1a2138] text-indigo-300 border border-indigo-500/30 self-start sm:self-auto">
                June 2025 - July 2025
              </span>
            </div>

            <ul className="space-y-2.5 text-slate-300 text-sm md:text-base pl-2 list-disc list-inside">
              <li>
                Collaborated in full-stack web development using MERN stack (MongoDB, Express.js, React.js, Node.js).
              </li>
              <li>
                Developed responsive user interfaces using React.js and reusable components.
              </li>
              <li>
                Integrated RESTful APIs to enable dynamic data exchange between frontend and backend.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

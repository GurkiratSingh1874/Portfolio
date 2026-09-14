import React from 'react';

function ProjectCard({ title, description, link, demo, technologies = [], isFeatured }) {
  return (
    <div className="group relative p-6 flex flex-col justify-between bg-[#0c0e19]/90 border border-slate-800/80 hover:border-[#465697] shadow-xl shadow-slate-950/60 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-indigo-950/40">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">Project</span>
          </div>
          {isFeatured && (
            <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-indigo-600/30 text-indigo-300 border border-indigo-500/40">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200">
          {title}
        </h3>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-[#182038] text-indigo-200/90 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed py-1">
          {description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-1.5 px-4 text-sm font-semibold rounded-full bg-[#465697] hover:bg-[#5b6eb8] transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 shadow-md shadow-indigo-950/50"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Code
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-200 py-1.5 px-4 text-sm font-semibold rounded-full bg-slate-800/90 hover:bg-slate-700/90 border border-indigo-500/30 transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

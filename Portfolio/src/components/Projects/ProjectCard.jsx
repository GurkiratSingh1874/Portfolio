import React from 'react';

function ProjectCard({ title, description, link, demo, technologies = [], isFeatured, category }) {
  return (
    <div className="group relative p-7 flex flex-col justify-between rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/50 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300 hover:-translate-y-2">
      <div>
        {/* Card Header Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {demo ? (
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            ) : (
              <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
            )}
            <span className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
              {demo ? "Live Deployment" : "Open Source"}
            </span>
          </div>

          {isFeatured && (
            <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/40 shadow-sm">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-200 tracking-tight">
          {title}
        </h3>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 my-3.5">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-lg bg-slate-950/80 text-indigo-200/90 border border-indigo-500/20 group-hover:border-indigo-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="text-slate-300 text-sm leading-relaxed py-1 font-light">
          {description}
        </p>
      </div>

      {/* Card Action Buttons */}
      <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white py-2 px-4 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5 shadow-md shadow-emerald-950/40"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
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

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white py-2 px-4 text-xs md:text-sm font-semibold rounded-full bg-slate-950/80 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-400/40 transition-all duration-200 hover:scale-105 inline-flex items-center gap-1.5"
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
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;

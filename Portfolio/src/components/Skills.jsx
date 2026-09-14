import React from 'react';

const skillCategories = [
  {
    title: "Programming Languages",
    iconColor: "from-blue-500 to-indigo-500",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend Engineering",
    iconColor: "from-cyan-500 to-blue-500",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Redux Toolkit", "Responsive UI", "REST Integrations"],
  },
  {
    title: "Backend & Databases",
    iconColor: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Express.js", "Flask", "MongoDB / Mongoose", "PostgreSQL", "MySQL", "Prisma ORM", "REST APIs"],
  },
  {
    title: "AI, Tools & Core Architecture",
    iconColor: "from-purple-500 to-pink-500",
    skills: ["RAG Pipelines", "FAISS Vector DB", "Llama 3 / Ollama", "Sentence Transformers", "Git & GitHub", "OOP", "DBMS", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="Skills" className="p-6 md:p-16 max-w-7xl mx-auto text-white">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
          Technical Arsenal
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-white mt-1 tracking-tight">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group p-7 rounded-3xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/30"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.iconColor} shadow-md`}></span>
              <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-medium bg-slate-950/70 text-slate-200 border border-slate-800/90 group-hover:border-indigo-500/30 hover:border-indigo-400 hover:text-white hover:bg-[#121829] transition-all duration-200 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

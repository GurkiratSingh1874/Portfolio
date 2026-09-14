import React from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vite", "Redux Toolkit", "Responsive Design"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Flask", "MongoDB / Mongoose", "Prisma ORM", "MySQL", "SQLite", "REST APIs"],
  },
  {
    title: "AI, Tools & Core Concepts",
    skills: ["RAG Pipelines", "FAISS Vector DB", "Llama 3 / Ollama", "Sentence Transformers", "Git & GitHub", "OOP", "DBMS", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="Skills" className="p-8 md:p-20 text-white max-w-7xl mx-auto">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-1">
          Skills & Technologies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-black/30 border border-slate-800/80 hover:border-[#465697] transition-all duration-300 shadow-xl shadow-slate-950/40"
          >
            <h3 className="text-lg md:text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-400"></span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs md:text-sm font-medium bg-[#141a2e] text-slate-200 border border-indigo-500/20 hover:border-indigo-400 hover:text-white transition-all duration-150"
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

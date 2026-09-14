import React, { useState } from 'react';
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: "tasksync",
    title: "TaskSync",
    description: "Full-stack project and task tracking platform featuring interactive metric dashboards, role-based workflows, immutable audit timelines, overdue alert systems, and dependency tracking.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
    link: "https://github.com/GurkiratSingh1874/BUSY_INFO_PROJECT",
    demo: "https://project-tracker-pw16.onrender.com/",
    isFeatured: true,
    category: "Full Stack",
  },
  {
    id: "ravu-travels",
    title: "Ravu Travels",
    description: "Modern travel booking and destination discovery web application built with Next.js and Prisma, featuring secure JWT authentication, Cloudinary media handling, and dynamic responsive UI.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "Tailwind CSS", "Cloudinary"],
    link: "https://github.com/GurkiratSingh1874/ravu-travels",
    demo: "https://ravu-travels.vercel.app",
    isFeatured: true,
    category: "Full Stack",
  },
  {
    id: "chatbot",
    title: "NITJ RAG University Chatbot",
    description: "AI-powered university assistant leveraging Retrieval-Augmented Generation (RAG), FAISS vector search, and local Ollama Llama 3 to accurately answer institutional campus and admissions queries.",
    technologies: ["Python", "Flask", "RAG", "FAISS", "Sentence Transformers", "Llama 3"],
    link: "https://github.com/Bhimansh-Garg/RagBasedUniversityChatbot",
    demo: null,
    isFeatured: true,
    category: "AI / ML",
  },
  {
    id: "lms",
    title: "Library Management System",
    description: "Full-stack MERN application for complete library inventory operations, book search, borrowing/return workflows, and secure user/admin authentication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    link: "https://github.com/GurkiratSingh1874/Library-Management-System",
    demo: null,
    isFeatured: true,
    category: "Full Stack",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing full-stack projects, experience, and skills with a sleek dark-mode UI built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/GurkiratSingh1874/Portfolio",
    demo: null,
    isFeatured: false,
    category: "Frontend",
  },
  {
    id: "food-ordering",
    title: "Food Ordering App",
    description: "Desktop GUI application built with Python Tkinter and SQLite for seamless food catalog browsing, cart calculations, and order management.",
    technologies: ["Python", "Tkinter", "SQLite"],
    link: "https://github.com/GurkiratSingh1874/python_project",
    demo: null,
    isFeatured: false,
    category: "Desktop / Python",
  },
  {
    id: "pizza-heaven",
    title: "Pizza Heaven",
    description: "Interactive restaurant web interface with a modern layout, dark mode toggle, and smooth scrolling animations.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/GurkiratSingh1874/PIZZA-HEAVEN",
    demo: null,
    isFeatured: false,
    category: "Frontend",
  },
  {
    id: "coffee-landing",
    title: "Coffee Landing Page",
    description: "Starbucks-themed product landing page featuring interactive image sliders and modern UI aesthetics.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/GurkiratSingh1874/Coffee-Landing-Page",
    demo: null,
    isFeatured: false,
    category: "Frontend",
  },
];

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "AI / ML", "Frontend", "Desktop / Python"];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="Projects" className="p-8 md:p-20 text-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-mono font-semibold">
            Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-1">
            Featured Projects
          </h2>
        </div>
        <p className="text-slate-400 text-sm md:text-base max-w-md">
          A selection of full-stack web applications, AI/ML solutions, and software systems I've engineered.
        </p>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
              filter === cat
                ? "bg-[#465697] text-white shadow-md shadow-indigo-950/60"
                : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            demo={project.demo}
            isFeatured={project.isFeatured}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

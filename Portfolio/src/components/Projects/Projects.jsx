import React from 'react'
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio Website"
          main="React + Tailwind; responsive design showcasing my work."
          link="https://github.com/GurkiratSingh1874/Portfolio"
        />
        <ProjectCard
          title="Food Ordering App"
          main="Python Tkinter GUI with SQLite for order management."
          link="https://github.com/GurkiratSingh1874/python_project"
        />
        <ProjectCard
          title="Pizza Heaven"
          main="HTML/CSS/JS site with dark mode toggle and smooth scrolling."
          link="https://github.com/GurkiratSingh1874/PIZZA-HEAVEN"
        />
        <ProjectCard
          title="Coffee Landing Page"
          main="Starbucks-themed landing with interactive slider."
          link="https://github.com/GurkiratSingh1874/Coffee-Landing-Page"
        />
      </div>
    </div>
    )
}

export default Projects

import { useState } from 'react'
import { projects } from '../../data/projects.js'
import SectionHeading from '../ui/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="mx-auto max-w-[1280px] px-8 pb-36">
      <SectionHeading index="05" label="Projects" title="Things I've" dimWord="actually built." />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 80} className="h-full">
            <ProjectCard project={project} onOpen={setActiveProject} />
          </Reveal>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

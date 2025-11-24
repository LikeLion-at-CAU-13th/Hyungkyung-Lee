'use client'

import { useRouter } from 'next/navigation'
import { Project } from '@/constant/projects'

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {
  const router = useRouter()

  const handleNavigate = (slug: string) => {
    router.push(`/projects/${slug}`)
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <button
          key={project.id}
          type="button"
          onClick={() => handleNavigate(project.slug)}
          className="text-left p-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg"
        >
          <h2 className="mb-3 text-xl font-semibold">{project.title}</h2>
          <p className="mb-4 text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={`${project.id}-${tech}`}
                className="px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="text-sm font-medium text-blue-600 hover:text-blue-800">
            자세히 보기 &gt;
          </div>
        </button>
      ))}
    </div>
  )
}


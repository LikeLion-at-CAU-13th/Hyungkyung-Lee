import { notFound } from "next/navigation"
import { projects } from "@/constant/projects"
import BackButton from "@/components/BackButton"

interface PageProps {
    params : {slug : string}
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug : project.slug,
    }))
}

export default async function ProjectDetailPage({params} : PageProps){
    const resolvedParams = await Promise.resolve(params)
    const project = projects.find((p) => p.slug === resolvedParams.slug)

    if (!project) notFound();


  return (
    <div className="min-h-screen pt-[12vh]">
      <div className="container max-w-4xl px-4 py-8 mx-auto">
        {/* 뒤로가기 버튼 */}
        <BackButton />

        {/* 프로젝트 헤더 */}
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {project.title}
          </h1>
          <p className="mb-6 text-lg text-gray-600">{project.description}</p>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 링크 버튼 */}
          <div className="flex gap-4">
            {project.url && project.url !== '#' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                프로젝트 보기
              </a>
            )}
            {project.github && project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-900"
              >
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* 프로젝트 상세 내용 */}
        {project.content && (
          <div className="px-4 py-8 mx-auto ">
            {/* 프로젝트 개요 */}
            {project.content.overview && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold">프로젝트 개요</h2>
                <p className="text-gray-700">{project.content.overview}</p>
              </section>
            )}

            {/* 주요 기능 */}
            {project.content.features && project.content.features.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-semibold">주요 기능</h2>
                <ul className="text-gray-700 list-disc list-inside">
                  {project.content.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 기술 스택 */}
            {project.content.techStack && (
              <section>
                <h2 className="text-xl font-semibold">기술 스택</h2>
                <p className="text-gray-700">{project.content.techStack}</p>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
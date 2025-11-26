import React from 'react'
import { notFound } from 'next/navigation'
import { projects } from '@/constant/projects'
import ProjectList from '@/components/projects/ProjectList'

export default function ProjectPage() {
  if (!projects || projects.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-[12vh]">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-12 text-3xl font-bold text-center sm:text-4xl md:text-5xl">
          아기사자의 2025 프로젝트
        </h1>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}

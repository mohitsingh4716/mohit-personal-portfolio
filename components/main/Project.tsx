import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-10'>
          <h1 className='text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10'>
                My Projects
          </h1>
          <div className='h-full w-full flex flex-col md:flex-row gap-10 py-20'>
            <ProjectCard
              src="/project1.jpg"
                title="SpendPath"
                description="SpendPath is a full-stack AI-powered finance management platform designed to simplify and optimize your financial journey. This project leverages modern technologies to provide seamless financial insights and effortless transaction management."
            />

<ProjectCard
              src="/project1.jpg"
                title="SpendPath"
                description="SpendPath is a full-stack AI-powered finance management platform designed to simplify and optimize your financial journey. This project leverages modern technologies to provide seamless financial insights and effortless transaction management."
            />
          </div>
    </div>
  )
}

export default Project
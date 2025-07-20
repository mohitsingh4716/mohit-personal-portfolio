import React from 'react'
import { ProjectCard } from '../sub/ProjectCard'

export const Project = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-10 px-4 max-w-7xl mx-auto'>
      
      <h1 className='text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center'>
        My Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10 w-full '>

        <ProjectCard
          src="/project4.png"
          title="TurboPay"
          description="TurboPay is a scalable payment wallet system enabling secure P2P and bank-to-wallet transactions with real-time updates. It includes JWT authentication and an interactive dashboard. Key technologies used include Next.js, TypeScript, PostgreSQL, and Turborepo."
         techStack={["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma", "JWT", "Turborepo"]}
          githubLink="https://github.com/mohitsingh4716/turbopay"
          liveLink="https://turbopay.vercel.app"
        />

          <ProjectCard
          src="/project1.jpg"
          title="SpendPath"
          description="SpendPath is a full-stack AI-powered finance management platform designed to simplify and optimize your financial journey. This project leverages modern technologies to provide seamless financial insights and effortless transaction management."
          techStack={["React", "Next.js", "TailwindCSS", "Prisma ORM","Supabase","Clerk", "Vercel"]}
          githubLink="https://github.com/mohitsingh4716/spendpath"
          liveLink="https://spend-path.vercel.app"
        />

        <ProjectCard
          src="/project2.png"
          title="Medium"
          description="Medium Clone is a full-stack blogging platform where users can share stories and ideas through a rich text editor and personalized interface. User authentication is handled with JWT for secure access."
          techStack={["React", "TypeScript","TailwindCSS", "PostgreSQL","Prisma", "Cloudflare Workers"]}
          githubLink="https://github.com/mohitsingh4716/medium_blog"
          liveLink="https://medium-blog-pi-ivory.vercel.app"
        />

        <ProjectCard
          src="/project3.jpg"
          title="GlitchFlix-GPT"
          description="GlitchFlix-GPT is a Netflix-inspired movie streaming platform that offers GPT-powered recommendations and dynamic content curation using the TMDB API. The app is deployed on Vercel for fast and scalable performance."
          techStack={["React.js","TailwindCSS","Firebase", "Redux", "TMDB API","Vercel"]}
          githubLink="https://github.com/mohitsingh4716/glitchflix-gpt"
          liveLink="https://github.com/mohitsingh4716/glitchflix-gpt"
        />
      </div>
    </div>
  )
}

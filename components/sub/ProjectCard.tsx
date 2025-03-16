"use client"
import { ExternalLink, GithubIcon } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'


interface ProjectCardTypes {
   src: string,
    title: string,
    description: string,
    techStack?: string[],
    githubLink?: string,
    liveLink?: string,
}
const ProjectCard = ({ src, title, description, techStack = [], githubLink, liveLink }: ProjectCardTypes) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-all duration-300 hover:shadow-xl hover:border-purple-500 h-full flex flex-col'
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className='relative overflow-hidden'>
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full h-80 object-cover  transition-transform duration-500 hover:scale-105'
      />
      
      {/* Overlay with buttons on hover */}
      <div 
        className={`pt-16 absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300"
          >
            <GithubIcon size={24} />
          </a>
        )}
        
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors duration-300"
          >
            <ExternalLink size={24} />
          </a>
        )}
      </div>
    </div>

    <div className='relative p-6 flex flex-col flex-grow'>
      <h1 className='text-2xl font-semibold text-white'>{title}</h1>
      <p className='mt-3 text-gray-300'>{description}</p>
      
      {techStack.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2'>
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className='px-3 py-1 bg-[#2A0E61] text-xs font-medium rounded-full text-purple-300'
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
 )
}

export default ProjectCard
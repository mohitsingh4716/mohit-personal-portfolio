"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Download } from 'lucide-react'



export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      id='home'
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
            <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    Fullstack Developer Portfolio
                </h1>
            </motion.div>



            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
            >
            <span>
                Hey,  I&apos;m
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Mohit Kumar{" "}
                </span>
            </span>
            </motion.div>

            <motion.p
                variants={slideInFromLeft(0.8)}
                className="text-lg text-gray-400 my-5 max-w-[600px]"
                >
                I&apos;m Full Stack Developer skilled in React, Node.js, and Next.js, with a strong passion for building real-world, impactful solutions using modern web technologies.
                <span> Check out my projects and skills.</span>
            </motion.p>

            <motion.a
                    href="https://drive.google.com/file/d/14peffnQx01cB9c3rLssU0wX0iYFw2h_A/view?usp=sharing"
                     target="_blank"
                     rel="noopener noreferrer"
                    variants={slideInFromLeft(1)}
                    className="py-2 px-4 button-primary text-white cursor-pointer rounded-lg max-w-[220px] inline-flex items-center justify-center space-x-2"
                  >
              <Download className="w-4 h-4" />
              <span> Download Resume</span>
            </motion.a>

        </div>

        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/cube-unscreen.gif"
          alt="main-Icons"
          height={500}
          width={500}
          unoptimized
        />
      </motion.div>


      </motion.div>
  )
}

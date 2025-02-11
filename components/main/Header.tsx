import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
    return (
        <div className="w-full h-16 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 lg:px-10 px-6">
          <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2">
            <a
              href="#about-me"
              className="h-auto w-auto flex flex-row items-center"
            >
              <Image
                src="/mainlogo.png"
                alt="logo"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin"
              />
    
              <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                Mohit Dev
              </span>
            </a>
    
            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
              <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                <a href="#about-me" className="cursor-pointer">
                  About me
                </a>
                <a href="#skills" className="cursor-pointer">
                  Skills
                </a>
                <a href="#projects" className="cursor-pointer">
                  Projects
                </a>
              </div>
            </div>
    
            <div className="flex flex-row lg:gap-8 gap-2">
                <Link href={"https://www.linkedin.com/in/mohitsingh4716/"}>
               
                    <Image
                    src="/linkedin.svg"
                    alt="linkendin-icon"
                    width={32}
                    height={32}
                    />
                 </Link>

                 <Link href={"https://github.com/mohitsingh4716"}>
                    <Image
                    src="/githubIcons.png"
                    alt="github-icon"
                    width={32}
                    height={32}
                    /> 
                </Link>
            
            </div>


          </div>
        </div>
      );
}

export default Header
import React from 'react'
import HeroContent from '../sub/HeroContent'
import Header from './Header'

const Hero = () => {
  return (
    <div className='relative  flex flex-col h-full w-full '>
        <Header/>
        <video 
          autoPlay
          loop
          muted
          className='rotate-180 absolute -top-96 z-[1] h-full w-full left-0 object-cover'
          >
            <source src='/bgvideo.webm' type='video/webm'/>

        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero
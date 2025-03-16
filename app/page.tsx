import Contact from '../components/main/contact';
import Footer from '../components/main/footer';
import Hero from '../components/main/hero';
import Project from '../components/main/project';
import Skills from '../components/main/skills';
import React from 'react';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h- gap-20'>
         <Hero/>
         <Skills/>
         <Project/>
         <Contact/>
         <Footer/>
      </div>
    </main>
  );
}

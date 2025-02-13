import Hero from '@/components/main/Hero';
import Project from '@/components/main/Project';
import Skills from '@/components/main/Skills';
import React from 'react';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col h-[850px] gap-20'>
         <Hero/>
         <Skills/>
         <Project/>
      </div>
    </main>
  );
}

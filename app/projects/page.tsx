"use client";
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';
import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import projects from '@/public/projects.json'

const ProjDisplay = ({index, title, category, children}: {index: number, title: string, category: string, children: ReactNode}) => {
  return (
    <div key={index} className="flex flex-col bg-white shadow-md rounded-lg p-6 w-[338px] min-h-[640px] max-h-[640px] text-center mb-4">
      <div className="text-yellow-500 text-l mb-4">
        <img src={`/${category}/${index}_img.png`} alt={`Preview for ${title}`}  className='mb-10 mx-auto w-1/2'/>
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="text-gray-600 mb-auto overflow-hidden">{children}</div>
      <Link href={`/projects/${category}/${index}`} className="btn btn-bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 w-full self-stretch">See More</Link>
    </div>
  );
}

const Portfolio = () => {
  const [cat, setCat] = useState(0);
  const cats = ["Main", ...Object.keys(projects)]
  const catNames = ['Economic Research', 'Business Analytics', 'Financial Research', 'Cat Photos']
  const catButtons = 'btn btn-neutral text-2xl w-1/2 h-full'

  useEffect(()=>{
    console.log(cats);
  },[])

  projects[cats[cat] as keyof typeof projects]

  return (
    <div className="text-center">
      <div className="flex flex-grow items-start w-[1024px] min-h-[406px] mb-10">
      {cat === 0 ?
      <div className='flex flex-row justify-start w-full md:justify-around gap-6'>
        <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center" >
          <div className="text-yellow-500 text-5xl mb-4">
            <span role="img" aria-label="icon">🌟</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Economic Research</h3>
          <button onClick={()=>{setCat(1)}} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Check projects</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center" >
          <div className="text-yellow-500 text-5xl mb-4">
            <span role="img" aria-label="icon">🌟</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Business Analytics</h3>
          <button onClick={()=>{setCat(2)}} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Check projects</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center" >
          <div className="text-yellow-500 text-5xl mb-4">
            <span role="img" aria-label="icon">🌟</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Financial Research</h3>
          <button onClick={()=>{setCat(3)}} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Check projects</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-72 text-center" >
          <div className="text-yellow-500 text-5xl mb-4">
            <span role="img" aria-label="icon">🌟</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Cat photos</h3>
          <button onClick={()=>{setCat(4)}} className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Check photos</button>
        </div>
      </div>
      
      :
      <div className="flex flex-col items-start mb-10 w-full">
      <div className='flex flex-row w-full bg-base-200 md:bg-base-100 sticky top-32 pb-1'>
        <button className='btn btn-secondary relative left-0' onClick={()=>{setCat(0);}}>Return</button>
        <h2 className='text-white bg-gradient-to-tl from-primary to-secondary font-semibold text-3xl mx-auto my-auto p-3 rounded-xl'>{catNames[cat-1]}</h2>
      </div>
      <div className='flex flex-row flex-wrap content-stretch w-full items-start justify-center gap-1 justify-items-stretch'>
      {projects[cats[cat] as keyof typeof projects].map((project, index) => (
        <ProjDisplay title={project.title} category={cats[cat]} key={index} index={index}>
          {project.s_desc}
        </ProjDisplay>
      ))}</div></div>}
    </div>
    </div>
  )
}

export default Portfolio
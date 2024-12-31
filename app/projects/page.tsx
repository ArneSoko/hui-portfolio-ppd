"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import projects from '@/public/projects.json'

const ProjDisplay = ({desc, prev, index}: {desc: string, prev?: string, index: number}) => {
  return(
    <div className='flex flex-col gap-2'>
      <div className='flex justify-start flex-wrap md:justify-between'>
        {prev ? <ul className='w-[49%]'><li><img src={prev} /></li></ul> : null}
        <ul className='w-1/2 text-right'>
          <li>{desc}</li>
        </ul>
      </div>
      <Link href={`/projects/${index}`} target='_blank' className="btn btn-primary font-semibold text-white">Learn more</Link>
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
        <div className='flex justify-start w-full h-[400px] md:justify-around'>
          <ul className='flex flex-col justify-around w-1/2'>
            <li><button onClick={()=>{setCat(1)}} className={catButtons}>Economic Research</button></li>
            <li><button onClick={()=>{setCat(2)}} className={catButtons}>Business Analytics</button></li>
          </ul>
          <ul className='flex flex-col justify-around w-1/2'>
            <li><button onClick={()=>{setCat(3)}} className={catButtons}>Financial Research</button></li>
            <li><button onClick={()=>{setCat(4)}} className={catButtons}>Cat Photos</button></li>
          </ul>
        </div>
      :
      <div className="flex flex-col items-start mb-10">
      <div className='flex flex-row w-full bg-base-200 md:bg-base-100 sticky top-32 pb-1'>
        <button className='btn btn-secondary relative left-0' onClick={()=>{setCat(0);}}>Return</button>
        <h2 className='text-white bg-gradient-to-tl from-primary to-secondary font-semibold text-3xl mx-auto my-auto p-3 rounded-xl'>{catNames[cat-1]}</h2>
      </div>
      <div className="flex flex-wrap items-start mb-10">
      {projects[cats[cat] as keyof typeof projects].map((project, index) => (
        <FakeTerminalWindow key={index} section={project.title} size="w-[49.5%] my-5">
          <div className='flex flex-col gap-2'>
            <div className='flex justify-start flex-grow md:justify-between'>
              <ul className=''>
                <li>{project.s_desc}</li>
              </ul>
            </div>
            <Link href={`/projects/${cats[cat]}/${index}`} target='_blank' className="btn btn-primary font-semibold text-white">Learn more</Link>
          </div>
        </FakeTerminalWindow>
      ))}</div></div>}
    </div>
    </div>
  )
}

export default Portfolio
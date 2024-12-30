import Link from 'next/link';
import React from 'react';
import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import Preview from '../components/projects/Preview';
import Project from '../components/projects/Project';
import * as projects from '@/public/projects.json'


const Portfolio = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap items-start mb-10">
      {projects.map((project, index) => (
        <FakeTerminalWindow key={index} section={project.title} size="w-[49%] my-5">
          <div className='flex flex-col gap-2'>
            <div className='flex justify-start flex-wrap md:justify-between'>
              <ul className='w-[49%]'>
                <li><img src='/hui_calligraphy_CDW_full.png' /></li>
              </ul>
              <ul className='w-1/2 text-right'>
                <li>{project.s_desc}</li>
              </ul>
            </div>
            <Link href={`/projects/${index}`} target='_blank' className="btn btn-primary font-semibold text-white">Learn more</Link>
          </div>
        </FakeTerminalWindow>
      ))}
      <FakeTerminalWindow section='example' size='w-[49%] my-5'>something</FakeTerminalWindow>
      <FakeTerminalWindow section='example' size='w-5/12 my-5'>something</FakeTerminalWindow>
    </div>
    </div>
  )
}

export default Portfolio
import React from 'react';
import Link from 'next/link';
import projects from '@/public/projects.json';

const PortfolioDetail = async ({ params }: { params: {cat:string, id: number } }) => {
  const {cat, id} = await params
  const ent = projects[cat as keyof typeof projects][id]
  return (
    <div className="text-center flex flex-grow flex-col items-start mb-10">
      <div className='flex flex-row w-full bg-base-200 md:bg-base-100 sticky top-28 pb-1'>
        <h2 className='text-white bg-gradient-to-l from-primary to-secondary font-semibold text-3xl mx-auto my-auto p-3 rounded-xl'>{ent.title}</h2>
      </div>
      <div className="flex flex-wrap gap-2 w-full items-start my-10">
        <div className='flex flex-col flex-shrink justify-between w-[49%]'>
          <img src={`/${cat}/${id}_img.png`} alt={`Preview for ${ent.title}`}  className='mb-10 mx-auto w-1/2'/>
          {ent.link !== undefined ? 
          <Link href={ent.link} locale={false} target="_blank"  rel="noopener noreferrer" className="btn btn-primary font-semibold text-white">
           See original 
          </Link> 
          : 
          null}
        </div>
        <div className='flex flex-col w-[49%] text-justify'>{ent.l_desc !== undefined ? ent.l_desc : ent.s_desc}</div>
      </div>
    </div>
  )
}

export default PortfolioDetail
import { ReactNode } from 'react'
import Project from './Project'
import { pages } from '@/lib/constants'

const Preview = ({ p }: { p: Project}) => {
    return (
        <a href={"/"+pages.projects + "/" + p.title} 
        className="md:w-1/2 flex flex-col items-center justify-center my-10 px-6">
            {/* top bar */}
            <div className='w-full mx-auto text-center rounded-t-xl'>
                <p className='text-violet-400 font-semibold'>{p.title}</p>
            </div>
            {/* bottom content */}
            <div className='w-full bg-base-300 p-6 rounded-xl'>
                <div className="space-y-4 space">
                    <div className='flex justify-start flex-wrap md:justify-between'>
                        <ul className='w-1/2'>
                            {p.img? <img src='img' /> : <></>}
                        </ul>
                        <ul className='md:text-right w-1/2'>
                            <p>{p.s_desc}</p>
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Preview
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import projects from '@/public/projects.json';


const PortfolioDetail = async ({ params }: { params: Promise<{ cat: string; id: number }> }) => {
  const { cat, id } = await params;
  const ent = projects[cat as keyof typeof projects][id];

  return (
    <div className="text-center flex flex-grow flex-col items-start mb-10">
      {/* Header */}
      <div className="flex flex-row w-full bg-base-200 md:bg-base-100 sticky top-14 md:top-28 pb-1">
        <h2 className="bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text font-extrabold tracking-wide uppercase text-3xl mx-auto my-auto p-3 hover:opacity-80 focus:outline-none">
          {ent.title}
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap gap-2 w-full items-start my-10">
        {/* Image and Details Link */}
        <div className="flex flex-col flex-shrink justify-between items-center fixed w-1/3 md:left-[10vw]">
          <img
            src={`/${cat}/${id}_img.png`}
            alt={`Preview for ${ent.title}`}
            className="mb-10 mx-auto w-2/3 max-h-[500px] "
          />
          {ent.link !== undefined ? (
            <Link
              href={ent.link}
              locale={false}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold text-lg underline hover:decoration-solid hover:text-secondary transition duration-300"
            >
              📖 Explore Details
            </Link>
          ) : null}
        </div>

        {/* Description Section */}
        <div className="flex flex-col w-[65%] md:w-[70%] text-justify whitespace-pre-line ml-auto mr-4 md:mr-0">
          {ent.l_desc !== undefined ? ent.l_desc : ent.s_desc}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center w-full mt-10">
        <Link
          href={'/projects'}
          className="bg-gradient-to-tl from-primary to-secondary text-white px-4 py-2 rounded-md hover:opacity-80"
          style={{ width: '100px' }}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default PortfolioDetail;
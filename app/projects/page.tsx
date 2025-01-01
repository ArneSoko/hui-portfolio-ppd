"use client";

import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import projects from "@/public/projects.json";

const ProjDisplay = ({
  index,
  title,
  category,
}: {
  index: number;
  title: string;
  category: string;
}) => (
  <Link
    href={`/projects/${category}/${index}`}
    className="flex flex-col bg-white shadow-md rounded-lg p-4 w-[280px] h-[400px] text-center mb-6 transition-transform transform hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer"
  >
    {/* Image Section */}
    <div className="flex justify-center items-center mb-4 h-[150px]">
      <img
        src={`/${category}/${index}_img.png`}
        alt={`Preview for ${title}`}
        className="w-3/4 h-auto max-h-full object-contain"
      />
    </div>

    {/* Title */}
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
  </Link>
);

const Portfolio = () => {
  const [cat, setCat] = useState(0);
  const cats = ["Main", ...Object.keys(projects)];
  const catNames = ["Economic Research", "Business Analytics", "Financial Research"];
  const buttonStyles =
    "bg-gradient-to-tl from-primary to-secondary text-white px-4 py-2 rounded-md hover:opacity-80";

  useEffect(() => {
    console.log(cats);
  }, []);

  return (
    <div
      className="relative"
      style={{
        maxHeight: "calc(100vh - 64px)", // Adjust height to account for existing navbar
      }}
    >
      {/* Portfolio Section */}
      <div className="pt-16">
        {cat === 0 ? (
          <div className="flex flex-row justify-start w-full md:justify-around gap-8 px-8">
            {catNames.map((name, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-6 w-72 text-center transition-transform transform hover:shadow-lg hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{ willChange: "transform" }}
                onClick={() => setCat(idx + 1)} // Navigate to the next layer on click
              >
                <div className="text-yellow-500 text-5xl mb-4">
                  <span role="img" aria-label="icon">
                    🌟
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-start mb-10 w-full">
            {/* Header */}
            <div className="flex flex-row w-full bg-base-200 md:bg-base-100 pb-1 mb-6">
              <h2 className="bg-gradient-to-tl from-primary to-secondary text-transparent bg-clip-text font-extrabold tracking-wide uppercase text-3xl mx-auto my-auto p-3 hover:opacity-80 focus:outline-none">
                {catNames[cat - 1]}
              </h2>
            </div>

            {/* Scrollable Cards */}
            <div
              className="flex flex-wrap content-stretch w-full items-start justify-center gap-6 px-8"
              style={{
                paddingTop: "20px", // Space under the header
              }}
            >
              {projects[cats[cat] as keyof typeof projects].map((project, index) => (
                <ProjDisplay
                  key={index}
                  title={project.title}
                  category={cats[cat]}
                  index={index}
                />
              ))}
            </div>

            {/* Back Button */}
            <div className="flex justify-center mt-10 w-full">
              <button
                onClick={() => setCat(0)}
                className="bg-gradient-to-tl from-primary to-secondary text-white px-4 py-2 rounded-md hover:opacity-80"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
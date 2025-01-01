"use client";

import React from "react";
import aboutClasses from "./About.module.css"; // Keeping the existing classes for other sections
import { skills } from "@/lib/constants"; // Importing the skills object

const CombinedPage = () => {
  return (
    <div>
      {/* About Section */}
      <div className={aboutClasses.box} id="about">
        <span className={aboutClasses.head}>ABOUT ME</span>
        <h2 className={aboutClasses.heading}>Who Am I?</h2>
        <div className={aboutClasses.About}>
          <p>
            As people always say: "There is nothing new under the sun." I research the past for a
            thriving future. Finding a pattern from data and pulling missing pieces together always
            fascinates me. I enjoy telling stories with numbers and talking about the lessons
            learned.
          </p>
          <p className={aboutClasses.br}>
            I am very proud to be a student of the first course delivery of causal machine learning
            at UofT, led by Dr. Nazanin Khazra. Now, I am one of the very few people in Canada that
            has competent knowledge of Causal Inference in a Business/Economic setting, where Python
            packages like SkLearn, DoWhy, EconML, and LightGBM are heavily used. Check out the{" "}
            <a className="text-secondary" href={"/projects#"}>
              latest research
            </a>{" "}
            tab to see some interesting findings.
          </p>
          <p>
            I have 4 years of project experience in a variety of fields - Data analytics/science,
            Research, Business analytics, and even teaching! I appreciate the opportunities where I
            mastered skills in Python, SQL, R, Tableau, PowerBI, STATA, and SAS for machine learning
            and visualization.
          </p>
          <p>
            I am an interest-driven person; the thirst for knowledge drives me forward. But now a
            more pressing question arises: What can I do with the knowledge? If I'm just selfishly
            keeping it locked away in a corner of my brain, then maybe I'm no different from others
            who have nothing to offer in this field. I'm desperately looking for some like-minded
            partners. Together, we can do something different.
          </p>
        </div>
      </div>

      {/* Interest Section */}
      <div className={aboutClasses.box} id="interest">
        <span className={aboutClasses.head}>WHAT I DO?</span>
        <h2 className={aboutClasses.heading}>HERE ARE SOME OF MY EXPERTISE</h2>

        {/* Skill Headers Outside the Cards */}
        <div className={aboutClasses.Interest}>
          {/* App Development Section */}
          <div className={aboutClasses.web}>
            <h3>Language</h3>
            <ul>
              {skills.theObvious.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Web Development Section */}
          <div className={aboutClasses.app}>
            <h3>Libraries</h3>
            <ul>
              {skills.librariesFrameworks.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <ul>
              {skills.toolsOfTheTrade.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Expanded Expertise Section */}
          <div className={aboutClasses.other}>
            <h3>Models</h3>
            <ul>
              {skills.models.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <span className={aboutClasses.head}>WHAT I LIKE</span>
        <h2 className={aboutClasses.heading}>MY HOBBIES AND INTERESTS</h2>
      {/* What I Like Section (Modified with Tailwind CSS and fitting the theme) */}
      <div className={`${aboutClasses.box} p-2 rounded-lg shadow-lg`} id="hobbies">
        
        {/* <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
          

         {/* Hobbies Section */}
<div className="overflow-x-auto py-2 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  <div className="flex gap-6">
    {/* Reading Section */}
    <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none"> 
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reading 📚</h3>
            <p> I enjoy reading both fiction and non-fiction books. I love exploring new ideas and gaining insights from different perspectives.</p>
          </div>

          {/* Movies Section */}
          <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Movies 🎬 </h3>
            <p>Watching movies is one of my favorite pastimes. I enjoy both classic films and modern blockbusters.</p>
          </div>

          {/* Gardening Section */}
          <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Gardening 👩🏻‍🌾 </h3>
            <p>I find gardening relaxing and rewarding. It's great to see plants grow and thrive with a little care and attention.</p>
          </div>
    {/* Animals Section */}
    <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Animals 🐔</h3>
      <p> I find gardening relaxing and rewarding. It's great to see plants grow and thrive with a little care and attention.</p>
    </div>

    {/* Crochet Section */}
    <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Crochet 🧶</h3>
      <p> I love the art of crochet! It's a calming hobby where I create beautiful patterns and designs with yarn and needles.</p>
    </div>

    {/* Cooking Section */}
    <div className="bg-base-100 p-4 rounded-lg shadow-lg text-center w-60 flex-none">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cooking 🍳</h3>
      <p> Cooking is one of my favorite activities. I enjoy experimenting with new recipes and creating delicious meals for friends and family.</p>
    </div>
  </div>
</div>
        </div>
      </div>
    // </div>
  );
};

export default CombinedPage;
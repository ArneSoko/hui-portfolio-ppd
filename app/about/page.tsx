import FakeTerminalWindow from '../components/about/FakeTerminalWindow';
import { skills, pages } from '../../lib/constants';

const SkillList = ({ title, items }: { title: string, items: string[] }) => (
  <>
    <li className="text-secondary font-semibold">{title}</li>
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </>
);

const About = () => {
  return (
    <div className="space-y-10 my-10 break-words">
      {/* general bio */}
      <FakeTerminalWindow section='About me:' size='w-5/6'>
        <p>As people always say: "There is nothing new under the sun." I research the past for a thriving future. Finding a pattern from data and pulling missing pieces together always fascinates me. I enjoy telling stories with numbers and talking about the lessons learned.</p>
        <p>I am very proud to be a student of the first course delivery of causal machine learning at UofT, lead by Dr. Nazanin Khazra. Now, I am one of the very few people in Canada that has a competent knowledge to Causal Inference in a Business/Economic setting, where Python packages like SkLearn, DoWhy, EconML and LightGBM are heavily used.  Check out the <a className='text-secondary' href={"/"+pages.projects+"#"}>latest research</a> tab to see some interesting findings.</p>
        <p>I have 4 years of project experience in variety of fields - Data analytics/ science, Research, Business analytics, and even in teaching! I appreciate the opportunities where I mastered skills of Python, SQL, R, Tableu, PowerBI, STATA and SAS for machine learning and visualization.</p>
        <p>I am an interest-driven person, the thirst for knowledge drives me forward. But now a more pressing question arises. What can I do with the knowledge. If I'm just selfishly keeping them locked away in a corner of my brain, then maybe I'm no different than others who have nothing to offer in this field. I'm desperately looking for some like-minded partners, together we do somethings different.</p>
      </FakeTerminalWindow>

      {/* skills & tools */}
      <FakeTerminalWindow section='Skills and Tools' size='w-5/6'>
        <div className='flex justify-start flex-wrap md:justify-between'>
          <ul>
            <SkillList title="Programming Languages" items={skills.theObvious} /><br/>
            <SkillList title="Tools" items={skills.toolsOfTheTrade} />
          </ul>
          <ul className='md:text-center'>
            <SkillList title="Models & Frameworks" items={skills.models} />
          </ul>
          <ul className="md:text-right">
            <SkillList title="Libraries" items={skills.librariesFrameworks} />
          </ul>
        </div>
      </FakeTerminalWindow>

      {/* hobbies / interests */}
      <FakeTerminalWindow section='Interests and Hobbies' size='w-5/6'>
        <ul>
          <li>📚 reading</li>
          <li>🎬 movies</li>
          <li>🧶 crochet</li>
          <li>🐔 animals</li>
          <li>👩🏻‍🌾 gardening</li>
        </ul>
      </FakeTerminalWindow>
    </div>
  );
}

export default About;

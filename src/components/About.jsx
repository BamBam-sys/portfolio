import { Tag, Experience } from '../common';
import { BsBriefcase } from 'react-icons/bs';
import { VscTools } from 'react-icons/vsc';

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJs',
    'Typescript',
    'Git',
    'Vue',
    'NextJs',
  ];

  const experiences = [
    {
      logo: '/images/hng.jpg',
      company: 'HNG Internship',
      role: 'Front-end developer',
      duration: 'Oct 2022 - Dec 2022',
    },
    {
      logo: '/images/ajoo.jpg',
      company: 'Ajoovest',
      role: 'Front-end developer',
      duration: 'Sept 2022 - present',
    },
  ];

  return (
    <section id="about" className="mt-[10rem] ">
      <div>
        <h2 className="text-[2rem] text-linkColor">About Me</h2>
        <p className="mt-[2rem] text-[1.6rem] leading-[1.6] ">
          I am a frontend developer with experience building reliable and
          user-friendly web applications with React and a diverse range of
          frameworks and technologies. I enjoy solving complex problems and I
          approach each challenge with excitement and curiosity, learning new
          skills and staying up to date with industry trends is essential to me.
          I am passionate about creating high-quality code that follows best
          practices and industry standards. I am always looking for new
          challenges and opportunities to grow as a developer.
        </p>
      </div>

      <div className=" mt-[4.5rem] w-full h-[1px] opacity-10 bg-primaryColor "></div>

      <div className="mt-[4.5rem] flex flex-col md:flex-row gap-[7rem] md:gap-[5rem] ">
        {/* experience */}
        <div className="w-[100%] md:w-[50%] ">
          <div className="flex items-center gap-[1rem]">
            <h3 className="text-[2rem] text-linkColor">Experience</h3>
            <BsBriefcase className="text-[2rem] " />
          </div>
          <div className="flex flex-col mt-[2.5rem] gap-[1.5rem] ">
            {experiences.map((experience) => (
              <Experience experience={experience} key={experience} />
            ))}
          </div>
        </div>

        {/* skills */}
        <div className="w-[100%] md:w-[50%] ">
          <div className="flex items-center gap-[1rem]">
            <h3 className="text-[2rem] text-linkColor">Skills</h3>
            <VscTools className="text-[2rem] " />
          </div>
          <div className="flex gap-4 mt-[2.5rem] flex-wrap ">
            {skills.map((skill) => (
              <Tag name={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

/* */

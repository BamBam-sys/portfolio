import { ProjectCard } from '../common';
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoFirebase,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVuejs,
} from 'react-icons/bi';
import { CgFramer } from 'react-icons/cg';
import { FaSass } from 'react-icons/fa';
import { SiStyledcomponents, SiChakraui } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      name: 'Pompeo Clone',
      link: 'https://pompeo-clone.netlify.app/',
      tools: [BiLogoReact],
      image: '/images/pompeo-clone.png',
    },
    {
      name: 'Entertainment web application',
      link: 'https://entertainment-web-application.netlify.app/',
      tools: [
        BiLogoReact,
        BiLogoRedux,
        CgFramer,
        BiLogoFirebase,
        FaSass,
        SiStyledcomponents,
      ],
      image: '/images/entertainment.png',
    },
    {
      name: 'Product Feedback',
      link: 'https://product-feedback-web-app.netlify.app/',
      tools: [BiLogoReact, BiLogoRedux, FaSass, SiStyledcomponents],
      image: '/images/product-feedback.png',
    },
    {
      name: 'Invoice web application',
      link: 'https://invoice-web-application.netlify.app/',
      tools: [BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript],
      image: '/images/invoice.png',
    },
    {
      name: 'Dev jobs',
      link: 'https://dev-jobs-web-app.netlify.app/',
      tools: [BiLogoVuejs, BiLogoTailwindCss],
      image: '/images/dev-jobs.png',
    },
    {
      name: 'Ajoovest',
      link: 'https://ajoovest.com/#/home',
      tools: [BiLogoReact, SiChakraui],
      image: '/images/ajoovest.png',
    },
  ];

  return (
    <div className="mt-[10rem]">
      <h2 className="text-[2rem] text-linkColor">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[2.5rem] gap-y-[3.5rem] mt-[2.5rem]">
        {projects.map((project) => (
          <ProjectCard project={project} key={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

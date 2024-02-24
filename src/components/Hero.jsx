import bams from '../assets/bambam.JPG';
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoGmail,
} from 'react-icons/bi';
import resume from '../assets/doc/Ayobami-resume.pdf';

const Hero = () => {
  return (
    <div className="relative z-[1] mt-[10rem] sm:mt-[15rem] flex flex-col gap-[5rem] sm:flex-row sm:gap-[3rem] ">
      <div className="flex w-full flex-col justify-center items-start ">
        <h1 className="text-[4.4rem] leading-[6.4rem] tracking-[-0.5px] font-normal mb-[0.5rem] ">
          I'm <strong>Ayobami</strong>
        </h1>
        <h3 className="text-[3rem] mb-[0.5rem] ">
          a <strong>Front-end Developer</strong>
        </h3>
        <h4 className="text-[1.6rem] ">Based in Lagos, Nigeria.</h4>
        <div className="flex gap-[0.8rem] mt-[0.8rem] text-[2.5rem] ">
          <a
            href="https://github.com/BamBam-sys?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGithub className="text-linkColor " />
          </a>
          <a
            href="https://www.linkedin.com/in/ayobami-lawal-61890a1a9/"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoLinkedin className="text-linkColor " />
          </a>
          <a
            href="https://twitter.com/Ayobammy_"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoTwitter className="text-linkColor " />
          </a>
          <a
            href="mailto:lawalayobamidavid@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <BiLogoGmail className="text-linkColor " />
          </a>
        </div>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="relative mt-[4rem] text-[1.6rem] font-semibold after:content-[''] after:w-[40%] after:border-b-[2px] after:border-linkColor after:absolute after:left-0 after:bottom-[-3px] after:border-opacity-70 hover:after:w-full after:transition-all after:duration-600  "
        >
          My Résumé
        </a>
      </div>

      <div
        className="relative shadow-sm h-[40rem] w-full rounded-lg after:hidden sm:after:block after:content-[''] after:h-full after:w-full after:border-[1.5rem] after:border-linkColor after:border-opacity-70 after:absolute after:rounded-lg after:translate-x-[10%] after:translate-y-[-12%] hover:after:translate-x-[0] hover:after:translate-y-[-0] after:z-[-1] after:transition after:duration-300 bg-cover bg-top "
        style={{ backgroundImage: `url(${bams})` }}
      ></div>
    </div>
  );
};

export default Hero;

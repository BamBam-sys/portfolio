import { BiLink } from 'react-icons/bi';

const ProjectCard = ({ project: { name, link, tools, image } }) => {
  return (
    <div className="border-b border-[#0001] p-[2rem] hover:shadow-x  transition duration-300 rounded-sm  ">
      <img src={image} alt="project website" className="min-h-[18.5rem] " />
      <div className="mt-[1rem] ">
        <p className="text-[1.5rem] font-medium ">{name}</p>
        <div className="flex gap-[0.5rem] mt-[0.5rem] ">
          {tools.map((Tool) => (
            <Tool className="text-[2rem] text-linkColor " key={Tool} />
          ))}
        </div>
        <div className="inline-flex items-center gap-[.5rem] mt-[1rem] hover:text-linkColor transition cursor-pointer ">
          <a
            href={link}
            target="_blank"
            className="text-[1.3rem] "
            rel="noreferrer"
          >
            view project
          </a>
          <BiLink className="text-[1.5rem]" />
        </div>
      </div>
      {/* <div className=" mt-[.5rem] w-full h-[1px] opacity-10 bg-primaryColor "></div> */}
    </div>
  );
};

export default ProjectCard;

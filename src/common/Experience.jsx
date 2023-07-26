import React from 'react';

const Experience = ({ experience: { logo, company, role, duration } }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[2rem] items-center ">
        <img src={logo} alt="company logo" className="w-[2.8rem]" />
        <div className="flex flex-col">
          <p className="text-[1.7rem] font-semibold ">{company}</p>
          <p className="text-[1.4rem] font-normal ">{role}</p>
        </div>
      </div>
      <div className="flex items-end text-[1.2rem] font-extralight ">
        {duration}
      </div>
    </div>
  );
};

export default Experience;

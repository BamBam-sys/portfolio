import React from 'react';

const Tag = ({ name }) => {
  return (
    <div className="px-[2rem] py-[0.8rem] rounded-md border border-tertiaryColor text-[1.4rem] text-secondaryColor ">
      {name}
    </div>
  );
};

export default Tag;

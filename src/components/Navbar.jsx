import avatar from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-[2.1rem]">
      <div className="flex gap-[1rem] items-center">
        <img
          src={avatar}
          alt="avatar"
          className="w-[5rem] rounded-[50%] hover:scale-110 transition duration-300  "
        />
        <p className="text-[1.6rem] text-linkColor font-medium">
          Ayobami Lawal
        </p>
      </div>
      {/* <nav className="shadow-md h-[4rem] w-[38rem] inline-flex items-center justify-between px-[2rem] rounded-[4rem] text-primaryColor text-[1.4rem] transition">
        <a href="/" className="hover:text-linkColor">
          HOME
        </a>
        <a href="#about" className="hover:text-linkColor">
          ABOUT
        </a>
        <a href="#projects" className="hover:text-linkColor">
          PROJECTS
        </a>
        <a href="#contact" className="hover:text-linkColor">
          CONTACT
        </a>
      </nav> */}
    </div>
  );
};

export default Navbar;

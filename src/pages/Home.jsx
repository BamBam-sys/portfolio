import { Hero, Navbar, About, Projects } from '../components';

const Home = () => {
  return (
    <div className="flex flex-col mb-[20rem]">
      <div className=" max-w-[120rem] w-[90%] mx-auto bg-white shadow-sm px-[2rem] first-letter: lg:px-[8rem] pb-[10rem] ">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Home;

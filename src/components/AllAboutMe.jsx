import About from "./About";

const AllAboutMe = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 pt-30  pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p
            className="
      text-violet-400
      uppercase
      tracking-[0.3em]
      text-sm
      mb-4
    "
          >
            About Me
          </p>

          <h1
            className="
      text-5xl
      md:text-6xl
      font-extrabold
    "
          >
            The Person Behind
            <span className="text-violet-500"> The Code</span>
          </h1>

          <p
            className="
      text-gray-400
      max-w-2xl
      mx-auto
      mt-6
      text-lg
    "
          >
            Passionate about building modern web experiences through clean
            design, responsive interfaces, and functional development that
            brings ideas to life.
          </p>
        </div>
        <About/>
      </div>
    </section>
  );
};

export default AllAboutMe;

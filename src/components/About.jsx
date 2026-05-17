import profile from "../assets/images/pixel-profile.png";
import coin from "../assets/images/coin.png";

const About = () => {
  return (
    <section className="min-h-screen bg-[#050816] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative group">
            <div
              className="
                            absolute inset-0
                            bg-violet-600/30
                            blur-3xl
                            rounded-3xl
                            group-hover:scale-105
                            transition-all duration-500
                        "
            ></div>
            <div
              className="
                            relative
                            bg-[#0f172a]
                            border border-white/10
                            rounded-3xl
                            p-4
                            backdrop-blur-xl
                            shadow-2xl
                        "
            >
              <img
                src={profile}
                alt="Profile"
                className="
                                    w-full
                                    max-w-md
                                    rounded-2xl
                                    object-cover
                                "
              />

              {/* Floating Badge */}
              <div
                className="
                                absolute -bottom-10 left-1/2
                                -translate-x-1/2
                                bg-violet-600
                                px-6 py-3
                                rounded-2xl
                                shadow-lg
                                text-center
                            "
              >
                <h3 className="font-bold text-lg">ALEXANDER JEROME LOBO</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <p
              className="
                            text-violet-400
                            uppercase
                            tracking-[0.3em]
                            text-sm
                            mb-3
                        "
            >
              About Me
            </p>

            <h1
              className="
                            text-5xl
                            md:text-6xl
                            font-extrabold
                            leading-tight
                        "
            >
              Building Digital
              <span className="text-violet-500"> Experiences</span>
            </h1>
          </div>
          <p
            className="
                        text-gray-300
                        leading-relaxed
                        text-lg
                    "
          >
            I’m a passionate developer who enjoys creating responsive websites,
            interactive dashboards, and modern web applications. I combine clean
            design with functional development to build digital experiences that
            are both engaging and user-friendly.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              "React",
              "Tailwind",
              "JavaScript",
              "Postgresql",
              "MySQL",
              "Node.js",
            ].map((skill, index) => (
              <div
                key={index}
                className="
                                    bg-white/5
                                    border border-white/10
                                    rounded-2xl
                                    p-4
                                    flex items-center justify-center gap-2
                                    hover:bg-violet-600/20
                                    hover:border-violet-500/40
                                    transition-all duration-300
                                "
              >
                <img src={coin} alt="coin" className="w-5" />
                <span>{skill}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 pt-4">
            <div
              className="
                            bg-white/5
                            rounded-2xl
                            p-5
                            border border-white/10
                            text-center
                        "
            >
              <h2 className="text-sm md:text-3xl font-bold text-violet-400">5+</h2>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div
              className="
                            bg-white/5
                            rounded-2xl
                            p-5
                            border border-white/10
                            text-center
                        "
            >
              <h2 className="text-sm md:text-3xl font-bold text-violet-400">3+</h2>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>

            <div
              className="
                            bg-white/5
                            rounded-2xl
                            p-5
                            border border-white/10
                            text-center
                        "
            >
              <h2 className="text-sm md:text-3xl font-bold text-violet-400">100%</h2>
              <p className="text-gray-400 text-sm">Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

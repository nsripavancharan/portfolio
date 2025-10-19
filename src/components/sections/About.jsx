import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-16"
    >
      <RevealOnScroll>
        <div className="max-w-3xl text-center z-10">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <strong>Nune Sri Pavan Charan</strong>, a Computer Science and
            Engineering student at Rajiv Gandhi University of Knowledge and
            Technologies, Ongole.  
            I’m passionate about full-stack web development, AI, and machine
            learning. My focus lies in creating high-performance web
            applications and intelligent systems that make a real-world impact.
          </p>
          

          <p className="text-gray-400 mt-6 text-base">
            I believe in continuous learning, teamwork, and combining creativity
            with logic to deliver elegant, efficient solutions.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};

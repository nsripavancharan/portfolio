import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-6 md:px-16"
    >
      {/* ---- Text: 70% ---- */}
      <RevealOnScroll>
        <div className="text-center md:text-left md:w-7/10 z-10 md:pr-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Nune Sri Pavan Charan
          </h1>

          <p className="text-gray-600 text-lg mb-6 w-full md:max-w-3xl mx-auto">
            Computer Science student passionate about full-stack development using the MERN stack and AI/ML technologies. Experienced
 in building and deploying responsive web applications and real-time AI solutions. Skilled in React.js, Node.js, MongoDB,
 Express.js, TensorFlow, and Scikit-learn. Seeking opportunities to create impactful, scalable software solutions.
          </p>

          {/* ---- Personal Info & Social Links ---- */}
          <div className="text-gray-300 mb-8 space-y-2 text-center md:text-left">
            <p className="font-semibold text-lg">MERN Developer | AI/ML Enthusiast</p>
            <p>
              Ongole, Andhra Pradesh, India | +91 8639920402 |{" "}
              <a
                href="mailto:nunepavancharan@gmail.com"
                className="text-blue-500 hover:underline"
              >
                nunepavancharan@gmail.com
              </a>
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/nune-sri-pavan-charan-64a8502a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/nsripavancharan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="/resume (5).pdf"
                download="Nune_Sri_Pavan_Charan_Resume.pdf"
                className="text-blue-500 hover:underline"
              >
                Download Resume
              </a>

            </div>
          </div>

          {/* ---- Action Buttons ---- */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* ---- Photo: 30% ---- */}
      <RevealOnScroll>
        <div className="md:w-3/10 flex justify-center mt-10 md:mt-0">
          <img
            src="/profile.jpg" // Replace with your image path
            alt="Nune Sri Pavan Charan"
            className="w-80 h-80 object-cover rounded-full shadow-lg border-4 border-blue-500"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
};

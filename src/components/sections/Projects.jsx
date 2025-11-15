import { RevealOnScroll } from "../RevealOnScroll";

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a full-stack e-commerce platform with authentication, cart management, and product filtering. Enhanced performance with API optimization, lazy loading, and responsive design using React.js.",
    tech: ["React.js", "Product API"],
  },
  {
    title: "Tourist Website (MERN Stack)",
    description:
      "Designed and implemented a full-stack tourism web application using React.js, Node.js, Express.js, and MongoDB. Integrated APIs for destination data, authentication, and booking management to enhance user experience and scalability.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Traffictelligence — Traffic Volume Estimation",
    description:
      "Engineered an ML-based traffic monitoring system that detects and counts vehicles from live video feeds. Leveraged YOLOv8 and OpenCV for real-time analytics to aid urban traffic management.",
    tech: ["YOLOv8", "OpenCV", "Python"],
  },
  {
    title: "Real-Time Object Detection",
    description:
      "Developed a real-time object detection application using YOLO to identify and classify objects from live video feeds with optimized inference speed and accurate bounding box visualization.",
    tech: ["YOLO", "OpenCV", "Python"],
  },
  {
    title: "Virtual Assistant",
    description:
      "Built a voice-controlled assistant integrating speech recognition, NLP, and text-to-speech for personalized automation. Streamlined everyday computing tasks with contextual understanding.",
    tech: ["Python", "NLP", "SpeechRecognition"],
  },
  {
    title: "YouTube Transcripter",
    description:
      "Automated YouTube audio extraction and transcription, converting speech to structured text. Reduced manual transcription effort by 90%.",
    tech: ["Python", "PyTube", "SpeechRecognition"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Developed a personal portfolio website using React.js to showcase projects, skills, and experience with responsive design and smooth scrolling navigation.",
    tech: ["React.js", "TailwindCSS"],
  },
];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-500 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

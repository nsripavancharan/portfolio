import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
    Backend: ["Node.js", "Express.js"],
    Programming: ["Python", "C"],
    Databases: ["MongoDB", "SQL"],
    "Machine Learning": [
      "TensorFlow",
      "Scikit-learn",
      "YOLOv8",
      "NLP",
      "Predictive Modeling",
    ],
    Tools: ["Git", "GitHub", "VS Code", "OpenCV"],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full text-center md:text-left z-10">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div
                key={category}
                className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {list.map((item, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

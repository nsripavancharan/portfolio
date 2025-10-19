import { RevealOnScroll } from "../RevealOnScroll";

export const EducationExperience = () => {
  return (
    <section
      id="education-experience"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-16"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full text-center md:text-left z-10">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education & Experience
          </h2>

          {/* ---- Education ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong>
                    Rajiv Gandhi University of Knowledge and Technologies, Ongole
                  </strong>
                  <br />
                  B.Tech in Computer Science and Engineering, CGPA: 8.95
                  <br />
                  Duration: 2022 – 2026
                </li>
                <li>
                  <strong>Pre-University Course (PUC), RGUKT Ongole</strong>
                  <br />
                  CGPA: 9.75
                  <br />
                  Duration: 2021 – 2022
                </li>
                <li>
                  <strong>Kerala High School, Ongole</strong>
                  <br />
                  Marks: 595 / 600
                  <br />
                  Duration: 2019 – 2020
                </li>
              </ul>
            </div>

            {/* ---- Experience ---- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Experience</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    AI/ML Intern – APSCHE SmartBridge (Jun 2023 – Aug 2023,
                    Virtual)
                  </h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Developed and optimized ML models using TensorFlow and
                      Scikit-learn for predictive analytics.
                    </li>
                    <li>
                      Implemented data preprocessing pipelines and
                      hyperparameter tuning.
                    </li>
                    <li>
                      Collaborated remotely on real-world classification tasks.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Frontend Web Development Intern – ShadowFox (Jan 2023 – Mar
                    2023, Remote)
                  </h4>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Built responsive UI components using React.js, HTML, CSS,
                      and JavaScript.
                    </li>
                    <li>
                      Worked collaboratively in agile teams using Git and
                      version control.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

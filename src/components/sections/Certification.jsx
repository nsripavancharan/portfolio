import { RevealOnScroll } from "../RevealOnScroll";

export const Certification = () => {
  const certifications = [
    {
      title: "Introduction to Programming using Python",
      issuer: "Coursera",
      year: "2022",
      link: "#",
    },
    {
      title: "DSA with Python",
      issuer: "GeeksforGeeks",
      year: "2022",
      link: "#",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      year: "2023",
      link: "#",
    },
    {
      title: "APSCHE SmartBridge Internship Certification",
      issuer: "APSCHE",
      year: "2023",
      link: "#",
    },
    {
      title: "Deep Learning & Object-Oriented Software Development",
      issuer: "NPTEL",
      year: "2023",
      link: "#",
    },
  ];

  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">
                  <strong>Issuer:</strong> {cert.issuer}
                </p>
                <p className="text-gray-400 mb-4">
                  <strong>Year:</strong> {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition-colors"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

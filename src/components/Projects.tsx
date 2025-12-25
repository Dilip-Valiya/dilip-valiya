import { ExternalLink, GitHub } from "react-feather";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, creative dark-themed portfolio website built with React, Next.js, and TypeScript. Features glassmorphism design, smooth animations, and responsive layout.",
      tags: ["React", "Next.js", "TypeScript", "Vite", "CSS"],
      link: "https://dilip-valiya.vercel.app",
      github: "",
    },
    {
      title: "Stock Market Analysis and Prediction",
      description:
        "Comprehensive platform for stock market analysis, enabling users to view annual reports and create personal portfolios. Integrated real-time data visualization.",
      tags: ["React.js", "Data Visualization", "Finance"],
      link: "",
      github: "",
    },
  ];

  return (
    <section id="projects" style={{ padding: "var(--section-padding)" }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  <h3 style={{ fontSize: "1.4rem", color: "white" }}>
                    {project.title}
                  </h3>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <GitHub size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--primary)" }}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--text-muted)",
                    marginBottom: "1.5rem",
                    lineHeight: "1.7",
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  marginTop: "auto",
                }}
              >
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--secondary)",
                      backgroundColor: "rgba(124, 58, 237, 0.1)",
                      padding: "4px 12px",
                      borderRadius: "20px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

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
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="glass-card project-card">
              <div style={{ flex: 1 }}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
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

                <p className="project-description">{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">
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

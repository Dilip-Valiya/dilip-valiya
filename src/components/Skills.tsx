const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "CSS", "TypeScipt", "DSA", "Latex"],
    },
    {
      title: "Frameworks",
      skills: [
        "React.js",
        "Next.js",
        "Vite",
        "React Query",
        "Jest",
        "React Testing Library",
        "MUI",
        "MSAL-React",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Docker",
        "Azure",
        "SonarQube",
        "Rancher",
        "Harness",
        "Snyk",
      ],
    },
    {
      title: "Others",
      skills: ["DSA", "TDD", "Adobe Analytics", "Google Analytics", ".NET"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "var(--section-padding)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card" style={{ height: "100%" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "1.5rem",
                  color: "var(--primary)",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "0.5rem",
                }}
              >
                {category.title}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "8px 16px",
                      borderRadius: "50px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      color: "white",
                      fontSize: "0.9rem",
                      border: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(0, 212, 255, 0.1)";
                      e.currentTarget.style.borderColor = "var(--primary)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {skill}
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

export default Skills;

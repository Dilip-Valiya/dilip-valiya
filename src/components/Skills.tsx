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
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card skills-category-card">
              <h3 className="skills-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
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

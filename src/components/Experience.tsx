const Experience = () => {
  const experiences = [
    {
      company: "Thoughtworks",
      location: "(/tw)",
      role: "Senior UI Developer (FTE Consultant)",
      period: "Mar 2024 – Present",
      clients: [
        {
          name: "Corteva Agriscience",
          details: [
            "Developed a critical web application for Sales Support and Sales Representatives to manage stock from scratch.",
            "Single-handedly implemented authentication and authorization using MSAL-React and the Azure platform.",
            "Designed and developed a search page to retrieve relevant Sales Agencies, Business Partners, Operations, and Sellers.",
            "Built the My Supply feature to track seed inventory and other product records for individual users.",
            "Collaborated with cross-functional teams to optimize IT processes and improve efficiency.",
            "Followed Test-Driven Development (TDD) practices, utilizing Jest and React Testing Library.",
            "Integrated Sonar for application monitoring and enhanced user experience.",
            "Integrated Adobe Analytics to understand the user navigation and bad spots on the website.",
          ],
        },
        {
          name: "PF Gen AI PoC",
          details: [
            "Led the development of a Next.js-based mobile-first responsive fitness tracking website.",
            "Implemented an AI-powered chatbot and various interactive content sections.",
          ],
        },
      ],
    },
    {
      company: "ZopSmart",
      location: "Bangalore",
      role: "Software Engineer",
      period: "Jan 2021 – Mar 2024",
      clients: [
        {
          name: "Kroger",
          details: [
            "Developed a Next.js-based platform from scratch, enabling users to create and manage cloud resources.",
            "Built and maintained a real-time log-level override tool with D3.js visualization.",
            "Utilized React Query for data fetching, caching, and synchronization.",
            "Leveraged Docker, Harness, Rancher, and Kubernetes for service deployment and monitoring.",
            "Authored a Terraform script to automate service principal creation and modification in Azure.",
            "Integrated Google Analytics, Azure AD, and Google login mechanisms.",
            "Conducted unit testing using Jest, Enzyme, and React Testing Library.",
          ],
        },
        {
          name: "Hiring Motion (Internal)",
          details: [
            "Designed and developed a React.js-based application to streamline hiring processes.",
            "Successfully onboarded over 25,000 profiles in 1.5 years.",
            "Utilized Material UI along with React.js, React Query, and React Scheduler.",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: "var(--section-padding)" }}>
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div style={{ position: "relative", marginTop: "2rem" }}>
          {/* Timeline line */}
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--primary), var(--secondary))",
              display: "none", // Hidden on mobile, shown on desktop via media query could be better but sticking to simple responsive layout
            }}
          ></div>

          <style>{`
                @media (min-width: 768px) {
                    .timeline-line { display: block !important; }
                    .exp-content { margin-left: 3rem !important; }
                }
            `}</style>
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(to bottom, var(--primary), var(--secondary))",
              display: "none",
            }}
          ></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{ marginBottom: "4rem", position: "relative" }}
            >
              {/* Dot */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "var(--primary)",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "11px",
                  top: "0",
                  boxShadow: "0 0 10px var(--primary-glow)",
                  display: "none",
                }}
                className="timeline-dot"
              ></div>
              <style>{`
                    @media (min-width: 768px) {
                        .timeline-dot { display: block !important; }
                    }
                `}</style>

              <div
                className="exp-content glass-card"
                style={{ marginLeft: "0", transition: "all 0.3s" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "1rem",
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: "1.5rem", color: "white" }}>
                      {exp.company}
                    </h3>
                    <p style={{ color: "var(--primary)" }}>{exp.role}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ color: "var(--text-muted)" }}>{exp.period}</p>
                    <p
                      style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}
                    >
                      {exp.location}
                    </p>
                  </div>
                </div>

                {exp.clients.map((client, cIndex) => (
                  <div key={cIndex} style={{ marginTop: "1.5rem" }}>
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        color: "var(--secondary)",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Client: {client.name}
                    </h4>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      {client.details.map((detail, dIndex) => (
                        <li
                          key={dIndex}
                          style={{
                            marginBottom: "0.5rem",
                            color: "var(--text-muted)",
                            listStyleType: "disc",
                            fontSize: "0.95rem",
                          }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

const Experience = () => {
  const experiences = [
    {
      company: "Thoughtworks",
      location: "Pune",
      role: "Senior UI Developer (FTE Consultant)",
      period: "Mar 2024 - Present",
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
      period: "Jan 2021 - Mar 2024",
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
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline-container">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              {/* Dot */}
              <div className="timeline-dot"></div>

              <div className="glass-card experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p className="experience-period">{exp.period}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                </div>

                {exp.clients.map((client, cIndex) => (
                  <div key={cIndex} className="client-block">
                    <h4 className="client-title">Client: {client.name}</h4>
                    <ul className="client-details">
                      {client.details.map((detail, dIndex) => (
                        <li key={dIndex}>{detail}</li>
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

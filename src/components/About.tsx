import { Download } from "react-feather";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="glass-card about-summary-card">
            <h3 className="about-summary-title">Professional Summary</h3>
            <p className="about-summary-text">
              UI Developer with 5+ years of experience building scalable, secure
              web applications using React, Next.js, and Azure. Delivered
              production-ready features for clients like Corteva and Kroger,
              with a focus on TDD and DevOps practices.
            </p>
            <p className="about-summary-text">
              Currently working at Thoughtworks as a Senior UI Developer,
              exploring backend technologies and enhancing user experiences
              through clean, efficient code and modern design principles.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => window.open("/Dilip_Valiya_Resume.pdf", "_blank")}
            >
              Download Resume{" "}
              <Download size={18} style={{ marginLeft: "8px" }} />
            </button>
          </div>

          <div className="about-stats-grid">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "4+", label: "Major Clients" },
              { number: "25k+", label: "Users Impacted" },
            ].map((stat, index) => (
              <div key={index} className="glass-card stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

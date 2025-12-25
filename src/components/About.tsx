import { Download } from "react-feather";

const About = () => {
  return (
    <section id="about" style={{ padding: "var(--section-padding)" }}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div className="glass-card">
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "var(--primary)",
              }}
            >
              Professional Summary
            </h3>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>
              UI Developer with 5+ years of experience building scalable, secure
              web applications using React, Next.js, and Azure. Delivered
              production-ready features for clients like Corteva and Kroger,
              with a focus on TDD and DevOps practices.
            </p>
            <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            {[
              { number: "5+", label: "Years Experience" },
              { number: "10+", label: "Projects Completed" },
              { number: "4+", label: "Major Clients" },
              { number: "25k+", label: "Users Impacted" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card"
                style={{ textAlign: "center", padding: "2rem 1rem" }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    background:
                      "linear-gradient(135deg, var(--primary), var(--secondary))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

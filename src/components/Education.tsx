const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: "var(--section-padding)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="glass-card" style={{ marginBottom: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  Bachelor of Technology in Information and Communication
                  Technology
                </h3>
                <p style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
                  Dhirubhai Ambani Institute of Information and Communication
                  Technology (DA-IICT)
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  Hons. in ICT with minor in CS | Minors: Computational Science
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    color: "white",
                  }}
                >
                  2017 - 2021
                </span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  11-12th Science
                </h3>
                <p style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>
                  Gyanmanjari Vidhyapith (GM)
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    color: "white",
                  }}
                >
                  2015 - 2017
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

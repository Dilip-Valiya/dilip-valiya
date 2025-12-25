import { Award } from "react-feather";

const Achievements = () => {
  const achievements = [
    "Recognized as Quarterly Top Performer for consistently exceeding performance goals.",
    "Scored 100/100 in Mathematics in 12th grade.",
    "Achieved 96% in JEE Mains, scoring 170 marks and securing 94th rank in Gujarat ACPC.",
  ];

  return (
    <section id="achievements" style={{ padding: "var(--section-padding)" }}>
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="glass-card">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: "1rem",
                  marginBottom:
                    index !== achievements.length - 1 ? "1.5rem" : "0",
                  paddingBottom:
                    index !== achievements.length - 1 ? "1.5rem" : "0",
                  borderBottom:
                    index !== achievements.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(255, 215, 0, 0.1)",
                    padding: "10px",
                    borderRadius: "50%",
                    color: "#FFD700",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "44px",
                  }}
                >
                  <Award size={24} />
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "var(--text-muted)",
                    lineHeight: "1.6",
                    paddingTop: "8px",
                  }}
                >
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

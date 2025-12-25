import { Award } from "react-feather";

const Achievements = () => {
  const achievements = [
    "Recognized as Quarterly Top Performer for consistently exceeding performance goals.",
    "Scored 100/100 in Mathematics in 12th grade.",
    "Achieved 96% in JEE Mains, scoring 170 marks and securing 94th rank in Gujarat ACPC.",
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <div className="achievements-container">
          <div className="glass-card">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`achievement-item ${
                  index !== achievements.length - 1 ? "with-border" : ""
                }`}
              >
                <div className="achievement-icon">
                  <Award size={24} />
                </div>
                <p className="achievement-text">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

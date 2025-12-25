const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-container">
          <div className="glass-card education-item">
            <div className="education-header">
              <div>
                <h3 className="education-degree">
                  Bachelor of Technology in Information and Communication
                  Technology
                </h3>
                <p className="education-institution">
                  Dhirubhai Ambani Institute of Information and Communication
                  Technology (DA-IICT)
                </p>
                <p className="education-details">
                  Hons. in ICT with minor in CS | Minors: Computational Science
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="education-year">2017 - 2021</span>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <div className="education-header">
              <div>
                <h3 className="education-degree">11-12th Science</h3>
                <p className="education-institution">
                  Gyanmanjari Vidhyapith (GM)
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span className="education-year">2015 - 2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

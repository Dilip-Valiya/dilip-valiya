import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#050508",
        padding: "4rem 0 2rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              DV.
            </h2>
            <p style={{ color: "var(--text-muted)" }}>
              Senior UI Developer building digital experiences.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a
              href="https://github.com/Dilip-Valiya"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--primary)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/dilipkvaliya"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--secondary)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            color: "var(--text-muted)",
            fontSize: "0.9rem",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Dilip Valiya. All rights reserved.
          </p>
          <p>
            Designed & Built with <span style={{ color: "red" }}>❤</span> using
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

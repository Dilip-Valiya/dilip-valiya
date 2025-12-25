import { GitHub, Linkedin } from "react-feather";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>DV.</h2>
            <p>Senior UI Developer building digital experiences.</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/Dilip-Valiya"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link github"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/dilipkvaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link linkedin"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
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

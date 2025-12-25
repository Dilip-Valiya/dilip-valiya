import { ArrowRight, GitHub, Linkedin, Mail, Phone } from "react-feather";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background decoration */}
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>

      <div className="container hero-container">
        <p className="animate-fade-in hero-greeting">HI THERE, I'M</p>

        <h1 className="animate-fade-in hero-title">Dilip Valiya</h1>

        <h2 className="animate-fade-in hero-role">
          <span>Senior UI Developer</span> based in India.
        </h2>

        <p className="animate-fade-in hero-description">
          Building scalable, secure web applications using React, Next.js, and
          Azure. Focusing on creating immersive digital experiences with clean,
          efficient code.
        </p>

        <div className="animate-fade-in hero-cta">
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me <Mail size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>

        <div className="animate-fade-in hero-socials">
          <a
            href="https://github.com/Dilip-Valiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <GitHub size={20} />{" "}
            <span className="hero-social-text">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/dilipkvaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
          >
            <Linkedin size={20} />{" "}
            <span className="hero-social-text">LinkedIn</span>
          </a>
          <a href="mailto:dilipkvaliya@gmail.com" className="hero-social-link">
            <Mail size={20} /> <span className="hero-social-text">Email</span>
          </a>
          <a href="tel:+919824431667" className="hero-social-link">
            <Phone size={20} />{" "}
            <span className="hero-social-text">+91 9824431667</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;

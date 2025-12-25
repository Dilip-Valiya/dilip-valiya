import { ArrowRight, GitHub, Linkedin, Mail, Phone } from "react-feather";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: "80px",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, var(--secondary-glow) 0%, transparent 70%)",
          opacity: 0.5,
          zIndex: -1,
          filter: "blur(50px)",
          animation: "bgPulse 8s infinite ease-in-out",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)",
          opacity: 0.5,
          zIndex: -1,
          filter: "blur(50px)",
          animation: "bgPulse 6s infinite ease-in-out reverse",
        }}
      ></div>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p
          className="animate-fade-in"
          style={{
            fontSize: "1.2rem",
            color: "var(--primary)",
            fontWeight: 600,
            letterSpacing: "2px",
            marginBottom: "1rem",
          }}
        >
          HI THERE, I'M
        </p>

        <h1
          className="animate-fade-in"
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1rem",
            animationDelay: "0.1s",
          }}
        >
          Dilip Valiya
        </h1>

        <h2
          className="animate-fade-in"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "var(--text-muted)",
            marginBottom: "2rem",
            animationDelay: "0.2s",
          }}
        >
          <span style={{ color: "var(--text-main)" }}>Senior UI Developer</span>{" "}
          based in India.
        </h2>

        <p
          className="animate-fade-in"
          style={{
            maxWidth: "600px",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            marginBottom: "2.5rem",
            animationDelay: "0.3s",
          }}
        >
          Building scalable, secure web applications using React, Next.js, and
          Azure. Focusing on creating immersive digital experiences with clean,
          efficient code.
        </p>

        <div
          className="animate-fade-in"
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
            animationDelay: "0.4s",
          }}
        >
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowRight size={18} style={{ marginLeft: "8px" }} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me <Mail size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>

        <div
          className="animate-fade-in"
          style={{
            display: "flex",
            gap: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            animationDelay: "0.5s",
          }}
        >
          <a
            href="https://github.com/Dilip-Valiya"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
            }}
          >
            <GitHub size={20} />{" "}
            <span style={{ fontSize: "0.9rem" }}>Github</span>
          </a>
          <a
            href="https://linkedin.com/in/dilipkvaliya"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
            }}
          >
            <Linkedin size={20} />{" "}
            <span style={{ fontSize: "0.9rem" }}>LinkedIn</span>
          </a>
          <a
            href="mailto:dilipkvaliya@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
            }}
          >
            <Mail size={20} /> <span style={{ fontSize: "0.9rem" }}>Email</span>
          </a>
          <a
            href="tel:+919824431667"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--text-muted)",
            }}
          >
            <Phone size={20} />{" "}
            <span style={{ fontSize: "0.9rem" }}>+91 9824431667</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          opacity: 0.7,
          animation: "fadeIn 1s 1s backwards",
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "2px",
            height: "60px",
            background:
              "linear-gradient(to bottom, var(--primary), transparent)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;

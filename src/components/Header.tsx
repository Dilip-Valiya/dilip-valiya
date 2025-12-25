import { useState, useEffect } from "react";
import { Menu, X, GitHub, Linkedin, Mail } from "react-feather";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[rgba(10,10,15,0.8)] backdrop-blur-md shadow-lg"
          : "py-6 bg-transparent"
      }`}
      style={{
        backgroundColor: isScrolled ? "rgba(10, 10, 15, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid rgba(255, 255, 255, 0.05)"
          : "none",
        padding: isScrolled ? "1rem 0" : "1.5rem 0",
        transition: "all 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          className="logo"
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => handleNavClick("#home")}
        >
          DV.
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: "none" }}>
          <style>{`
            @media (min-width: 768px) {
              .desktop-nav { display: flex !important; gap: 2rem; align-items: center; }
              .mobile-toggle { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                color: "var(--text-muted)",
                fontWeight: 500,
                fontSize: "0.95rem",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.name}
            </a>
          ))}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginLeft: "1rem",
              paddingLeft: "1rem",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <a
              href="https://github.com/Dilip-Valiya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/dilipkvaliya"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "var(--bg-card)",
              padding: "2rem",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              >
                {link.name}
              </a>
            ))}
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
              <a
                href="https://github.com/Dilip-Valiya"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/dilipkvaliya"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:dilipkvaliya@gmail.com"
                style={{ color: "white" }}
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

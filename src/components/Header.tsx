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
    <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="container header-container">
        <div className="logo" onClick={() => handleNavClick("#home")}>
          DV.
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <div className="nav-socials">
            <a
              href="https://github.com/Dilip-Valiya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <GitHub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/dilipkvaliya"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ))}
            <div className="mobile-socials">
              <a
                href="https://github.com/Dilip-Valiya"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <GitHub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/dilipkvaliya"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={24} />
              </a>
              <a href="mailto:dilipkvaliya@gmail.com" className="social-icon">
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

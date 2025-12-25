import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Loader } from "react-feather";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus({
        type: "error",
        message: "Configuration error. Please contact me directly.",
      });
      setLoading(false);
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setLoading(false);
          setStatus({ type: "success", message: "Message sent successfully!" });
          if (form.current) form.current.reset();
        },
        () => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      );
      // Clear status message after 6 seconds
      setTimeout(() => {
        setStatus({ type: null, message: "" });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3 className="contact-heading">Let's Talk</h3>
            <p className="contact-intro">
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="contact-details">
              <a href="mailto:dilipkvaliya@gmail.com" className="contact-link">
                <div className="contact-icon-wrapper icon-primary">
                  <Mail />
                </div>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">dilipkvaliya@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919824431667" className="contact-link">
                <div className="contact-icon-wrapper icon-secondary">
                  <Phone />
                </div>
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-value">+91 9824431667</p>
                </div>
              </a>

              <div className="contact-link">
                <div className="contact-icon-wrapper icon-white">
                  <MapPin />
                </div>
                <div>
                  <p className="contact-label">Location</p>
                  <p className="contact-value">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card contact-form-card">
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="form-input"
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="form-input"
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="form-textarea"
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={loading}
              >
                {loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <>
                    Send Message{" "}
                    <Send size={18} style={{ marginLeft: "8px" }} />
                  </>
                )}
              </button>

              {status.message && (
                <p
                  className={`status-message ${
                    status.type === "success"
                      ? "status-success"
                      : "status-error"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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

    // NOTE: These are placeholder IDs. You need to replace them with your actual EmailJS Service ID, Template ID, and Public Key
    // or set them up in your environment variables.
    // For now, we will simulate a success after a delay if keys are missing, or try to send if they exist.

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
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "var(--section-padding)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
    >
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
          }}
        >
          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                background: "linear-gradient(90deg, #fff, #aaa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Talk
            </h3>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "3rem",
                fontSize: "1.1rem",
              }}
            >
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <a
                href="mailto:dilipkvaliya@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(0, 212, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--primary)",
                  }}
                >
                  <Mail />
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Email
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "white" }}>
                    dilipkvaliya@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919824431667"
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(124, 58, 237, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--secondary)",
                  }}
                >
                  <Phone />
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Phone
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "white" }}>
                    +91 9824431667
                  </p>
                </div>
              </a>

              <div
                style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <MapPin />
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    Location
                  </p>
                  <p style={{ fontSize: "1.1rem", color: "white" }}>India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div>
                <label
                  htmlFor="user_name"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    color: "white",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="user_email"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    color: "white",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    color: "white",
                    outline: "none",
                    transition: "border-color 0.3s",
                    resize: "none",
                  }}
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
                className="btn btn-primary"
                disabled={loading}
                style={{ marginTop: "1rem", width: "100%" }}
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
                  style={{
                    marginTop: "1rem",
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor:
                      status.type === "success"
                        ? "rgba(0, 255, 0, 0.1)"
                        : "rgba(255, 0, 0, 0.1)",
                    color: status.type === "success" ? "#4ade80" : "#ef4444",
                    textAlign: "center",
                  }}
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

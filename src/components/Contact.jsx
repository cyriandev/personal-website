export default function Contact() {
  return (
    <div id="contact" className="contact">
      <p className="section-eyebrow">Get in touch</p>
      <h2 className="section-title">Let's work together</h2>

      <div className="contact-body">
        <div>
          <a href="mailto:cyriandev@gmail.com" className="contact-email-link">
            cyriandev@gmail.com
          </a>
          <p className="contact-tagline">
            Open to freelance projects, full-time roles, and interesting collaborations.
            Drop me a line — I respond promptly.
          </p>
        </div>

        <div className="social-links">
          <a href="https://github.com/cyriandev" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/cyriandev" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://wa.me/+27790946233" target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  )
}

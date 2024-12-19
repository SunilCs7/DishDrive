// Contact.jsx
import React from "react";
import "./Contact.css";

const Contact = () => {
  const contactData = {
    title: "Contact Us",
    email: "support@dishdrive.com",
    phone: "+91 6206714997",
    address: " Patia,Star City, 751024",

    socialLinks: {
      facebook: "https://facebook.com/dishdrive",
      instagram: "https://instagram.com/dishdrive",
      twitter: "https://twitter.com/dishdrive",
    },
    faqLink: "/faq",
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>{contactData.title}</h1>
      </div>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          <strong>Email:</strong> {contactData.email}
        </p>
        <p>
          <strong>Phone:</strong> {contactData.phone}
        </p>
        <p>
          <strong>Address:</strong> {contactData.address}
        </p>
      </section>

      <section className="contact-social">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a
            href={contactData.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href={contactData.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href={contactData.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </section>

      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <p>
          For common questions, visit our{" "}
          <a href={contactData.faqLink}>FAQ page</a>.
        </p>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

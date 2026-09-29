import about from '../data/about';
import Section from '../ui/Section';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <Section id="contact" variant="dark">
      <div className="contact-header">
        <span className="section-label light">Contact</span>
        <h2 className="section-title light">Let's Work Together</h2>
        <p className="contact-subtitle">
          I'm online and open to full-stack development opportunities. Send a
          message below and I'll be happy to connect.
        </p>
      </div>

      <div className="contact-content">
        <ContactForm />
      </div>

      <div className="contact-footer">
        <p>Based in {about.facts[0].value}</p>
        <p className="contact-status">
          <span className="status-dot" />
          Online now · Available for opportunities
        </p>
      </div>
    </Section>
  );
}

export default Contact;

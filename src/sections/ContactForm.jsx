
import { useState } from 'react';
import contactForm from '../data/contact';
import './ContactForm.css';

const EMPTY_FIELDS = { name: '', phone: '', email: '', message: '' };
function ContactForm() {
  const [fields, setFields] = useState(EMPTY_FIELDS);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const isSending = status === 'sending';
  const isConfigured = !contactForm.accessKey.startsWith('PASTE_');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    const botcheck = form.elements.botcheck.value;

    // Honeypot: real visitors never see this field, so a filled
    // one means a bot filled the form in. Pretend it worked.
    if (botcheck) {
      setFields(EMPTY_FIELDS);
      setStatus('success');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const response = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: contactForm.subject,
          from_name: contactForm.fromName,
          name: fields.name,
          phone: fields.phone,
          email: fields.email,
          replyto: fields.email,
          message: fields.message,
          botcheck,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setFields(EMPTY_FIELDS);
        setStatus('success');
        return;
      }

      setFeedback(data.message || 'Your message could not be sent. Please try again.');
      setStatus('error');
    } catch {
      setFeedback('No connection right now. Please try again in a moment.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFields(EMPTY_FIELDS);
    setFeedback('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <div className="contact-form-card">
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success-icon" aria-hidden="true">✓</span>
          <h3 className="form-success-title">Message sent</h3>
          <p className="form-success-text">
            Thanks for reaching out. I read every message and usually reply
            within a day or two.
          </p>
          <button type="button" className="form-reset-btn" onClick={handleReset}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <h3 className="form-title">Send a message</h3>
      <p className="form-subtitle">Fill this in and it lands straight in my inbox.</p>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">
            Full Name
          </label>
          <input
            id="contact-name"
            className="form-input"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            autoComplete="name"
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="contact-phone">
            Phone
          </label>
          <input
            id="contact-phone"
            className="form-input"
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+251 9XX XXX XXX"
            autoComplete="tel"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className="form-input"
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          className="form-input form-textarea"
          name="message"
          value={fields.message}
          onChange={handleChange}
          placeholder="What would you like to build together?"
          rows={5}
          required
        />
      </div>

      {/* Honeypot - hidden from people, catches bots */}
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-botcheck">Leave this field empty</label>
        <input id="contact-botcheck" type="text" name="botcheck" tabIndex={-1} autoComplete="off" />
      </div>

      {feedback && (
        <p className="form-error" role="alert">
          {feedback}
        </p>
      )}

      <button type="submit" className="form-submit" disabled={isSending}>
        {isSending ? 'Sending…' : 'Send Message'}
      </button>

      {!isConfigured && (
        <p className="form-setup-note">
          Add your Web3Forms access key in <code>src/data/contact.js</code> to
          start receiving messages.
        </p>
      )}
    </form>
  );
}

export default ContactForm;

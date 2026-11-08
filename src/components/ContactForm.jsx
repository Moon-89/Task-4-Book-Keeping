import { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // stop page reload
    setSent(true);
    event.target.reset();   // clear the form
  }

  return (
    <section className="section">
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fname">First Name</label>
            <input className="input large" type="text" id="fname" required />
          </div>
          <div className="field">
            <label htmlFor="lname">Last Name</label>
            <input className="input large" type="text" id="lname" />
          </div>
          <div className="field">
            <label htmlFor="eaddress">Email Address</label>
            <input className="input large" type="email" id="eaddress" required />
          </div>
          <div className="field">
            <label htmlFor="tel">Tel. Number</label>
            <input className="input large" type="tel" id="tel" />
          </div>
          <div className="field full">
            <label htmlFor="message">Message</label>
            <textarea className="input" id="message" rows="10" required></textarea>
          </div>
          <div className="full">
            <button type="submit" className="btn btn-wide">Send Message</button>
            {sent && <p className="form-success">Thank you! We will reply within one business day.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

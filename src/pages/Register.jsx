import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import './Register.css';

function Register() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // stop page reload
    setSent(true);
    event.target.reset();   // clear the form
  }

  return (
    <>
      {/* Blue top part */}
      <section className="register-top" style={{ backgroundImage: 'url(/images/hero_2.jpg)' }}>
        <div className="container">
          <h1>Open a Client Account</h1>
          <p>Tell us about your business and we will set up your books.</p>
        </div>
      </section>

      {/* Home > Open a Client Account */}
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">Home</Link>
          <FiChevronRight className="breadcrumbs-arrow" />
          <span className="current">Open a Client Account</span>
        </div>
      </div>

      {/* Form */}
      <section className="section">
        <div className="container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input className="input large" type="text" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input className="input large" type="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input className="input large" type="text" id="company" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input className="input large" type="tel" id="phone" />
            </div>
            <button type="submit" className="btn btn-wide">Request Account</button>
            {sent && (
              <p className="form-success">
                Thank you! We will email you within one business day to set up your account.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;

import { useState } from 'react';
import './Subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // stop page reload
    setSent(true);
    setEmail('');
  }

  return (
    <section className="section subscribe" style={{ backgroundImage: 'url(/images/hero_2.jpg)' }}>
      <div className="container subscribe-inner">
        <div className="subscribe-text">
          <h2>Subscribe to us!</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,</p>
        </div>

        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="newsletter-email" className="hidden-label">Email address</label>
            <input
              id="newsletter-email"
              className="input"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn">Send</button>
          </div>
          {sent && <p className="form-success">Thank you! You are on the list.</p>}
        </form>
      </div>
    </section>
  );
}

export default Subscribe;

import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import './CallToAction.css';

// Big photo banner: "We Are Here To Help Grow Your Business"
function CallToAction() {
  return (
    <section className="cta" style={{ backgroundImage: 'url(/images/hero_1.jpg)' }}>
      <div className="container">
        <Reveal className="cta-content">
          <h2>We Are Here To Help Grow Your Business</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
          <p><Link to="/register" className="btn">Get Started</Link></p>
        </Reveal>
      </div>
    </section>
  );
}

export default CallToAction;

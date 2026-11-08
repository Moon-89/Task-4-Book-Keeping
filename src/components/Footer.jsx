import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const solutions = ['Growth Business', 'Lifetime Support', 'Advanced Accounting', 'Money Calculations', 'Investment Bonds'];
const services = ['Investment Management', 'Financial Funds', 'Payroll and Tax Returns', 'Business Planning'];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: logo + text */}
          <div>
            <p className="footer-logo-wrap">
              <img src="/images/logo_footer.png" alt="Book Keeping" className="footer-logo" width="122" height="39" />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo minima qui dolor, iusto iure.</p>
            <p><Link to="/about">Learn More</Link></p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="footer-heading"><span>Solutions</span></h3>
            <ul>
              {solutions.map((item) => (
                <li key={item}><Link to="/services">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="footer-heading"><span>Services</span></h3>
            <ul>
              {services.map((item) => (
                <li key={item}><Link to="/services">{item}</Link></li>
              ))}
              <li><Link to="/register">Open an Account</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="footer-heading"><span>Contact</span></h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">Our Team</Link></li>
              <li><Link to="/blog">Latest News</Link></li>
              <li><a href="mailto:hello@example.com">hello@example.com</a></li>
              <li><a href="tel:+15550142290">+1 555 014 2290</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
            <FaHeart /> by{' '}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

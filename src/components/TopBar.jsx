import { FiHelpCircle, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './TopBar.css';

// Thin grey bar at the very top (hidden on mobile)
function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <Link to="/contact">
          <FiHelpCircle /> Have a question?
        </Link>
        <a href="tel:+15550142290">
          <FiPhone /> +1 555 014 2290
        </a>
        <a href="mailto:hello@example.com">
          <FiMail /> hello@example.com
        </a>
      </div>
    </div>
  );
}

export default TopBar;

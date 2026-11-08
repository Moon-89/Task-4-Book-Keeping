import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu open?
  const [subOpen, setSubOpen] = useState(false);   // Services sub-menu open (mobile)?
  const [stuck, setStuck] = useState(false);       // header stuck to the top?
  const [small, setSmall] = useState(false);       // header smaller?
  const { pathname } = useLocation();              // current page address

  // Watch scrolling: stick after the top bar, get smaller after 100px
  useEffect(() => {
    function handleScroll() {
      const topBar = document.querySelector('.topbar');
      const topBarHeight = topBar ? topBar.offsetHeight : 0;
      setStuck(window.scrollY > topBarHeight);
      setSmall(window.scrollY > 100);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Stop the page from scrolling while the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  let headerClass = 'header';
  if (stuck) headerClass += ' stuck';
  if (small) headerClass += ' small';

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="Book Keeping" width="122" height="39" />
        </Link>

        {/* Menu: normal row on desktop, slide-in panel on mobile */}
        <nav className={menuOpen ? 'menu open' : 'menu'} aria-label="Main menu">
          <div className="menu-head">
            <button className="menu-close" onClick={closeMenu} aria-label="Close menu">
              &times;
            </button>
          </div>

          {/* NavLink adds class "active" to the link of the current page */}
          <ul>
            <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li className="has-dropdown">
              <NavLink to="/services" onClick={closeMenu}>
                Services <FiChevronDown className="desktop-arrow" />
              </NavLink>

              {/* Arrow button to open the sub-menu (mobile only) */}
              <button
                className={subOpen ? 'sub-toggle open' : 'sub-toggle'}
                onClick={() => setSubOpen(!subOpen)}
                aria-label="Show submenu"
                aria-expanded={subOpen}
              >
                <span></span>
              </button>

              <ul className={subOpen ? 'dropdown open' : 'dropdown'}>
                <li><Link to="/services" onClick={closeMenu}>Investment Bonds</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Investment Management</Link></li>
                <li><Link to="/services" onClick={closeMenu}>Financial Funds</Link></li>
              </ul>
            </li>
            {/* "Blog" also stays blue on a single post page */}
            <li>
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) => (isActive || pathname === '/single' ? 'active' : '')}
              >
                Blog
              </NavLink>
            </li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Dark background behind the mobile menu */}
        <div className={menuOpen ? 'menu-overlay open' : 'menu-overlay'} onClick={closeMenu}></div>

        {/* Social icons + menu button */}
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

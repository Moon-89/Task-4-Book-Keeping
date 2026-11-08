import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import './PageBanner.css';

// Big photo at the top of inner pages (About, Services, Blog, Contact, Single post)
// "text" = small line under the title, "button" = show Get Started button or not
function PageBanner({
  title,
  image,
  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.',
  button = true,
}) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="container">
        <Reveal className="page-banner-content">
          <h1>{title}</h1>
          <p>{text}</p>
          {button && (
            <p><Link to="/register" className="btn">Get Started</Link></p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default PageBanner;

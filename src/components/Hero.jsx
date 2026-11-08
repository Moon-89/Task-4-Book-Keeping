import { Link } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useSlider from '../hooks/useSlider.js';
import Reveal from './Reveal.jsx';
import './Hero.css';

// Slides for the big banner
const slides = [
  { title: 'Book Keeping Consulting Agency', image: '/images/hero_1.jpg' },
  { title: 'Financial Funds', image: '/images/hero_2.jpg' },
];

// Real slides + a copy of the first one at the end (for the endless loop)
const slidesWithCopy = [...slides, slides[0]];

function Hero() {
  const slider = useSlider(slides.length, 5000);

  return (
    <section className="hero">
      {/* All slides sit in one row; we move the row left */}
      <div
        className="hero-track"
        style={{
          transform: `translateX(-${slider.index * 100}%)`,
          transition: slider.animate ? 'transform 1s ease' : 'none',
        }}
        onTransitionEnd={slider.onTransitionEnd}
      >
        {slidesWithCopy.map((slide, i) => (
          <div key={i} className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="container">
              {/* Second slide text sits a bit lower (same as the reference) */}
              <Reveal className={i === 1 ? 'hero-content lower' : 'hero-content'}>
                {i === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, nihil.</p>
                <p><Link to="/register" className="btn">Get Started</Link></p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>

      {/* Left / right arrows (show on mouse hover) */}
      <button className="hero-arrow left" onClick={slider.prev} aria-label="Previous slide">
        <FiArrowLeft />
      </button>
      <button className="hero-arrow right" onClick={slider.next} aria-label="Next slide">
        <FiArrowRight />
      </button>

      {/* Small lines at the bottom */}
      <div className="hero-dots">
        {slides.map((slide, i) => (
          <button
            key={i}
            className={i === slider.active ? 'dot active' : 'dot'}
            onClick={() => slider.goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;

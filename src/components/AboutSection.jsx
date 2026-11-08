import { FiArrowRight } from 'react-icons/fi';
import './AboutSection.css';

const points = [
  'Dolor sit amet',
  'Obcaecati similique excepturi',
  'Ipsum amet voluptas',
  'Aliquid facilis est',
  'Eligendi laborum assumenda',
];

function AboutSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="about">
          {/* Left: image */}
          <div className="about-image">
            <img src="/images/hero_1.jpg" alt="Office desk" />
          </div>

          {/* Right: text */}
          <div className="about-text">
            <span className="caption">About Us</span>
            <h2 className="title-with-line">Mindful Planning of Monetary Spending and Saving</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptate asperiores
              rem quis consectetur cum quae, ratione voluptatem aliquam sit aspernatur.
            </p>

            {/* Two lists side by side (same as the reference) */}
            <div className="about-lists">
              <ul className="arrow-list">
                {points.map((point) => (
                  <li key={point}><FiArrowRight /> {point}</li>
                ))}
              </ul>
              <ul className="arrow-list">
                {points.map((point) => (
                  <li key={point}><FiArrowRight /> {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

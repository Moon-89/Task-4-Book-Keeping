import useSlider from '../hooks/useSlider.js';
import './Testimonials.css';

const clients = [
  { name: 'Claire Morgan', role: 'Owner, Morgan Bakery', photo: '/images/person_1.jpg', quotes: true },
  { name: 'Daniel Reyes', role: 'Founder, Reyes Joinery', photo: '/images/person_2.jpg', quotes: false },
  { name: 'Owen Fletcher', role: 'Director, Fletcher Freight', photo: '/images/person_3.jpg', quotes: true },
  { name: 'Samuel Okafor', role: 'Partner, Okafor Dental', photo: '/images/person_4.jpg', quotes: false },
  { name: 'Linda Harper', role: 'Owner, Harper Florists', photo: '/images/person_5.jpg', quotes: true },
  { name: 'Nora Whitfield', role: 'CFO, Whitfield Studio', photo: '/images/person_6.jpg', quotes: false },
];

const quote =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, mollitia. Possimus mollitia nobis libero quidem aut tempore dolore iure maiores, perferendis, provident numquam illum nisi amet necessitatibus. A, provident aperiam!';

// Real cards + copies of the first 2 at the end (for the endless loop)
const cards = [...clients, clients[0], clients[1]];

function Testimonials() {
  const slider = useSlider(clients.length, 5000);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-heading">
          <span className="caption">Testimonials</span>
          <h2 className="title-with-line center">Happy Clients</h2>
        </div>

        <div className="slider">
          <div className="slider-window">
            {/* 2 cards are visible; each step moves the row by one card */}
            <div
              className="slider-track"
              style={{
                transform: `translateX(calc(-${slider.index} * (50% + 15px)))`,
                transition: slider.animate ? 'transform 0.25s ease' : 'none',
              }}
              onTransitionEnd={slider.onTransitionEnd}
            >
              {cards.map((client, i) => (
                <div className="testimonial" key={i}>
                  <div className="client">
                    <img src={client.photo} alt="" />
                    <div>
                      <h3>{client.name}</h3>
                      <span>{client.role}</span>
                    </div>
                  </div>
                  <p>{client.quotes ? `“${quote}”` : quote}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Small lines under the slider */}
          <div className="slider-dots">
            {clients.map((client, i) => (
              <button
                key={i}
                className={i === slider.active ? 'line active' : 'line'}
                onClick={() => slider.goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

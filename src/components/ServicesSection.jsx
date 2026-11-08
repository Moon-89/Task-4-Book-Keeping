import {
  BsBarChartLine,
  BsLifePreserver,
  BsCircleSquare,
  BsWallet2,
  BsBriefcase,
  BsCalculatorFill,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const services = [
  { icon: <BsBarChartLine />, title: 'Growth Business' },
  { icon: <BsLifePreserver />, title: 'Lifetime Support' },
  { icon: <BsCircleSquare />, title: 'Advanced Accounting' },
  { icon: <BsWallet2 />, title: 'Investment Bonds' },
  { icon: <BsBriefcase />, title: 'Investment Management' },
  { icon: <BsCalculatorFill />, title: 'Money Calculations' },
];

function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="services-heading">
          <span className="caption">Our Services</span>
          <h2 className="title-with-line center">What We Do</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              {/* Blue hexagon with icon */}
              <div className="hexagon">{service.icon}</div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                <Link to="/contact" className="btn">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

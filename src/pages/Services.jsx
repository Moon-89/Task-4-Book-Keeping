import PageBanner from '../components/PageBanner.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Subscribe from '../components/Subscribe.jsx';

function Services() {
  return (
    <>
      <PageBanner title="Services" image="/images/hero_2.jpg" />
      <ServicesSection />
      <Testimonials />
      <Subscribe />
    </>
  );
}

export default Services;

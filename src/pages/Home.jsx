import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import Numbers from '../components/Numbers.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Testimonials from '../components/Testimonials.jsx';
import News from '../components/News.jsx';
import Subscribe from '../components/Subscribe.jsx';

// Home page = all sections
function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Numbers />
      <ServicesSection />
      <CallToAction />
      <Testimonials />
      <News />
      <Subscribe />
    </>
  );
}

export default Home;

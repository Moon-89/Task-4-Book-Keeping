import PageBanner from '../components/PageBanner.jsx';
import AboutSection from '../components/AboutSection.jsx';
import Numbers from '../components/Numbers.jsx';
import Team from '../components/Team.jsx';
import CallToAction from '../components/CallToAction.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Subscribe from '../components/Subscribe.jsx';

function About() {
  return (
    <>
      <PageBanner title="About Us" image="/images/hero_1.jpg" />
      <AboutSection />
      <Numbers />
      <Team />
      <CallToAction />
      <Testimonials />
      <Subscribe />
    </>
  );
}

export default About;

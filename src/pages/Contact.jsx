import PageBanner from '../components/PageBanner.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Subscribe from '../components/Subscribe.jsx';

function Contact() {
  return (
    <>
      <PageBanner title="Contact us" image="/images/hero_2.jpg" />
      <ContactForm />
      <Subscribe />
    </>
  );
}

export default Contact;

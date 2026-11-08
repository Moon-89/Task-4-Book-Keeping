import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Single from './pages/Single.jsx';
import Contact from './pages/Contact.jsx';
import Register from './pages/Register.jsx';

function App() {
  const location = useLocation();

  // When the page changes, go back to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <TopBar />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

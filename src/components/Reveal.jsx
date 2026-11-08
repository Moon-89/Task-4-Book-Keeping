import { useEffect, useRef, useState } from 'react';

// Wrap anything in <Reveal> and it fades up when it comes on screen (only once).
function Reveal({ children, className = '' }) {
  const box = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
          observer.disconnect(); // stop watching after the first time
        }
      },
      { rootMargin: '0px 0px 50px 0px' }
    );
    observer.observe(box.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={box} className={`reveal ${show ? 'show' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default Reveal;

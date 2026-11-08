import { useState, useEffect } from 'react';

/*
  Simple looping slider logic (used by Hero and Testimonials).

  Trick: we put copies of the first slides at the end of the row.
  The slider always moves forward. When it reaches the copies,
  it jumps back to the real first slide WITHOUT animation,
  so it looks like an endless loop.

  total = number of real slides
  delay = time between slides (ms)
*/
function useSlider(total, delay) {
  const [index, setIndex] = useState(0);        // current position
  const [animate, setAnimate] = useState(true); // use CSS transition or not?

  function next() {
    setAnimate(true);
    setIndex((i) => i + 1);
  }

  function prev() {
    if (index > 0) {
      setAnimate(true);
      setIndex(index - 1);
      return;
    }
    // At the first slide: jump to the copy at the end (no animation), then move back
    setAnimate(false);
    setIndex(total);
    setTimeout(() => {
      setAnimate(true);
      setIndex(total - 1);
    }, 30);
  }

  function goTo(i) {
    setAnimate(true);
    setIndex(i);
  }

  // Called when the slide animation ends
  function onTransitionEnd(event) {
    // Ignore animations of things inside the slides (text, buttons)
    if (event.target !== event.currentTarget) return;

    if (index >= total) {
      setAnimate(false);       // jump back with no animation
      setIndex(index - total);
    }
  }

  // Auto play: go to the next slide after "delay" ms
  useEffect(() => {
    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [index, delay]);

  return {
    index,                    // position of the row
    active: index % total,    // which dot is active
    animate,
    next,
    prev,
    goTo,
    onTransitionEnd,
  };
}

export default useSlider;

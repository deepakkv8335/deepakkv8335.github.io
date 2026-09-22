import { useEffect, useState } from 'react';

/** Current vertical scroll position in pixels, throttled to one read per animation frame. */
export default function useScrollY() {
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrollY(window.scrollY);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', schedule, { passive: true });
    return () => {
      window.removeEventListener('scroll', schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return scrollY;
}

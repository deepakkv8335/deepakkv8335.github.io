import { useEffect, useState } from 'react';

// A section becomes active once its top edge crosses this fraction of the viewport height.
const ACTIVATION_LINE = 0.4;

function findActiveId(ids) {
  const root = document.documentElement;
  const isScrollable = root.scrollHeight > window.innerHeight + 8;
  const isAtBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 4;

  // Short final sections may never cross the activation line, so pin the last one at the bottom.
  if (isScrollable && isAtBottom && document.getElementById(ids[ids.length - 1])) {
    return ids[ids.length - 1];
  }

  const lineY = window.innerHeight * ACTIVATION_LINE;
  let activeId = null;
  for (const id of ids) {
    const element = document.getElementById(id);
    if (!element) continue;
    if (activeId === null || element.getBoundingClientRect().top <= lineY) activeId = id;
  }
  return activeId;
}

/**
 * Returns the id of the section currently in view, or null when disabled.
 * @param {string[]} ids Section ids in document order.
 * @param {boolean} enabled Turn off on routes that do not render the sections.
 */
export default function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      setActiveId(findActiveId(ids));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      cancelAnimationFrame(frame);
    };
  }, [ids, enabled]);

  return enabled ? activeId : null;
}

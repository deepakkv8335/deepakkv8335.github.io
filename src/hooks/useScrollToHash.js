import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router';

/**
 * Handles anchors and scroll position across navigation.
 * - `/#about` scrolls to the element with id "about" (smooth via CSS scroll-behavior).
 * - A new route without a hash starts at the top of the page.
 * - Back/forward navigation is left to the browser.
 */
export default function useScrollToHash() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  // `key` changes on every navigation, so clicking the same anchor again scrolls again.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key, navigationType]);
}

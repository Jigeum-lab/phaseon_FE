import { useEffect } from 'react';

export function usePreventScroll(showModal: boolean) {
  useEffect(() => {
    if (showModal) {
      const preventScroll = (e: WheelEvent | TouchEvent) => {
        e.preventDefault();
      };

      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [showModal]);
}

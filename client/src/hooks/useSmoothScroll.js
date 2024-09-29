import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToSection = useCallback((e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return scrollToSection;
};

export default useSmoothScroll;
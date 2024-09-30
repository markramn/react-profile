import { useEffect, useRef } from 'react';

const useSectionObserver = (sectionIds, threshold = 0.6) => {
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          window.history.pushState(null, '', `#${id}`);
          
          // Update active state in navbar
          document.querySelectorAll('.nav-item').forEach((item) => {
            item.classList.toggle('active', item.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.current.observe(element);
    });

    return () => observer.current.disconnect();
  }, [sectionIds, threshold]);
};

export default useSectionObserver;
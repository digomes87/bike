import { useEffect, useRef } from 'react';

interface UseSimpleAnimeOptions {
  offset?: number;
  animationClass?: string;
}

export function useSimpleAnime(options: UseSimpleAnimeOptions = {}) {
  const { offset = 0.6, animationClass = 'anime' } = options;
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Find all elements with data-anime attribute
    const elements = document.querySelectorAll('[data-anime]') as NodeListOf<HTMLElement>;
    elementsRef.current = Array.from(elements);

    const handleScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * offset;

      elementsRef.current.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset, animationClass]);

  const addElement = (element: HTMLElement) => {
    if (!elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };

  const removeElement = (element: HTMLElement) => {
    const index = elementsRef.current.indexOf(element);
    if (index > -1) {
      elementsRef.current.splice(index, 1);
    }
  };

  return {
    addElement,
    removeElement,
  };
}

// Hook para elementos individuais
export function useAnimeOnScroll(elementRef: React.RefObject<HTMLElement>, options: UseSimpleAnimeOptions = {}) {
  const { offset = 0.6, animationClass = 'anime' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const windowTop = window.pageYOffset + window.innerHeight * offset;
      
      if (windowTop > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, offset, animationClass]);
}
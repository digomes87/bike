import { useEffect, useRef, useState } from 'react';

interface UseSimpleSlideOptions {
  time?: number;
  pause?: boolean;
}

export function useSimpleSlide(options: UseSimpleSlideOptions = {}) {
  const { time = 5000, pause = false } = options;
  const containerRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<HTMLElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const slideElements = Array.from(
      containerRef.current.children
    ) as HTMLElement[];
    setSlides(slideElements);

    // Hide all slides initially
    slideElements.forEach((slide, index) => {
      slide.style.display = index === 0 ? 'block' : 'none';
    });
  }, []);

  useEffect(() => {
    if (pause || slides.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % slides.length;
        
        // Hide current slide
        if (slides[prev]) {
          slides[prev].style.display = 'none';
        }
        
        // Show next slide
        if (slides[nextSlide]) {
          slides[nextSlide].style.display = 'block';
        }
        
        return nextSlide;
      });
    }, time);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slides, time, pause]);

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    
    // Hide current slide
    if (slides[currentSlide]) {
      slides[currentSlide].style.display = 'none';
    }
    
    // Show target slide
    if (slides[index]) {
      slides[index].style.display = 'block';
    }
    
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return {
    containerRef,
    currentSlide,
    totalSlides: slides.length,
    goToSlide,
    nextSlide,
    prevSlide,
  };
}
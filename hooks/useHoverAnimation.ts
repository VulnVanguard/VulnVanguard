import { Ref, useEffect, useRef } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DELAY = 40;
const ITERATION = 0.5;

export const useHoverAnimation = <T extends HTMLElement = HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null);

  const isPhoneDevice = () => window.innerWidth <= 768;

  useEffect(() => {
    const targetElement = ref.current;

    if (!targetElement || isPhoneDevice()) return;

    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;

    const handleMouseOver: EventListener = (event) => {
      const target = event.target as HTMLElement;
      const targetValue = target.getAttribute('data-hover') || '';
      let iteration = 0;

      const animate = () => {
        target.innerText = targetValue
          .split('')
          .map((letter, index) =>
            index < iteration ? letter : LETTERS[Math.floor(Math.random() * 26)]
          )
          .join('');

        iteration += ITERATION;

        if (iteration < targetValue.length) {
          timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate);
          }, DELAY);
        }
      };
      
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Separate handler for mouseleave
    const handleMouseLeave: EventListener = (event) => {
      const target = event.target as HTMLElement;
      const targetValue = target.getAttribute('data-hover') || '';
      
      // Just reset to original text
      target.innerText = targetValue;
      
      // Clear any ongoing animations
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };

    const applyHoverEffect = (element: HTMLElement) => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseleave', handleMouseLeave);
    };

    if (targetElement.getAttribute('data-hover')) {
      applyHoverEffect(targetElement);
    } else {
      const elements = targetElement.querySelectorAll('[data-hover]');
      elements.forEach((element) => applyHoverEffect(element as HTMLElement));
    }

    return () => {
      const cleanupHoverEffect = (element: HTMLElement) => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };

      if (targetElement.getAttribute('data-hover')) {
        cleanupHoverEffect(targetElement);
      } else {
        const elements = targetElement.querySelectorAll('[data-hover]');
        elements.forEach((element) => cleanupHoverEffect(element as HTMLElement));
      }
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [ref]);

  return ref;
};
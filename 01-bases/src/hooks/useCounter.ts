import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const tl = useRef(gsap.timeline());

  // const handleClick = () => {
  //   if (counter === MAXIMUN_COUNT) return;
  //   setCounter(prev => prev + 1);
  // };

  // Forma PRO de hacer lo anterior:
  const handleClick = () => {
    setCounter(prev => Math.min(prev + 1, maxCount));
  };

  // useEffect(() => {
  //   if (counter < 15) return;

  //   console.log(
  //     '%cSe llego al valor máximo',
  //     'color: red; background-color: black;'
  //   );

  //   const tl = gsap.timeline();

  //   tl.to(counterElement.current, {
  //     y: -10,
  //     duration: 0.2,
  //     ease: 'ease.out',
  //   }).to(counterElement.current, { y: 0, duration: 1, ease: 'ease.in' });
  // }, [counter]);

  // Optimizando el useEffect anterior:
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'ease.in' })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};

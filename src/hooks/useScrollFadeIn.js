import { useCallback, useEffect, useRef } from 'react';

const useScrollFadeIn = (direction = 'up', duration = 1, delay = 0) => {
  const dom = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case 'up':
        // 이벤트 트리거가 발생하기 전 원하는 위치, default는 아래에서 위로 동작
        return 'translate3d(0, 50%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0,0,0.2,1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0,0,0)'; // 이벤트 트리거가 발생할 때 나타날 제 위치
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      /*
      * threshold
      - threshold는 number나 Array<number>로 정의할 수 있으며, Default 값은 0
      - number는 TargetElement의 노출 비율을 말하는 것이며, 0.7은 70% 정도 노출 되었을 때 해당 이벤트가 실행
      - Array는 각각의 비율로 노출 될 때마다 함수가 실행됨
      */
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction)
    }
  };
};

export default useScrollFadeIn;

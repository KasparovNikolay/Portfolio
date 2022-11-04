import React, {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './infinitLooper.module.scss';

export type InfinitLooperProps = {
  children: ReactNode;
  speed: number;
  direction: 'right' | 'left';
};

const InfiniteLooper: FC<InfinitLooperProps> = ({
  speed,
  direction,
  children,
}) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const setAnimationAttribute = () => {
    if (innerRef?.current) {
      innerRef.current.setAttribute('data-animate', 'false');

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute('data-animate', 'true');
        }
      }, 10);
    }
  };

  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    const { width: parentWidth } = outerRef.current.getBoundingClientRect();
    const { width: childWidth } = innerRef.current.getBoundingClientRect();

    const widthDelta = parentWidth - childWidth;
    const instanceWidth = childWidth / innerRef.current.children.length;

    if (widthDelta) {
      setLooperInstances(
        looperInstances + Math.ceil(widthDelta / instanceWidth) + 1
      );
    }

    setAnimationAttribute();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener('resize', setupInstances);

    return () => {
      window.removeEventListener('resize', setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <div className={styles.looper} ref={outerRef}>
      <div
        className={styles.looper__innerList}
        ref={innerRef}
        data-animate="true"
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={styles.looper__listInstance}
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === 'right' ? 'reverse' : 'normal',
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;

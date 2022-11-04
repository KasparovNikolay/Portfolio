import React, { FC, useEffect, useMemo, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import { Children } from '../../../../utils/types';

import styles from './animatedBackground.module.scss';
import { Canvas } from './models';

export type AnimatedBackgroundProps = {
  children: Children;
};

const arr = ['skills', 'contacts'];

const AnimatedBackground: FC<AnimatedBackgroundProps> = ({ children }) => {
  const ref = useRef(null);
  const { pathname } = useLocation();
  const canvasIsAvaliable = useMemo(() => {
    const currentPath = pathname.replace('/', '');
    return arr.includes(currentPath);
  }, [pathname]);

  useEffect(() => {
    if (canvasIsAvaliable) {
      new Canvas(ref.current);
    }
  }, [pathname]);

  return (
    <>
      {canvasIsAvaliable && (
        <canvas id="canvas" className={styles.canvas} ref={ref}></canvas>
      )}
      {children}
    </>
  );
};

export default AnimatedBackground;

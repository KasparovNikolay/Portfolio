import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Children } from '../../../utils/types';

import AnimatedBackground from './animated-background/AnimatedBackground';
import styles from './staticLayout.module.scss';

export type StaticLayoutProps = { children: Children };

const StaticLayout: FC<StaticLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <AnimatedBackground>
        <Outlet />
        {children}
      </AnimatedBackground>
    </div>
  );
};

export default StaticLayout;

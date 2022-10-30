import React, { FC } from 'react';

import { Outlet } from 'react-router-dom';

import { Children } from '../../../utils/types';

import styles from './staticLayout.module.scss';

export type StaticLayoutProps = { children: Children };

const StaticLayout: FC<StaticLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Outlet />
      {children}
    </div>
  );
};

export default StaticLayout;

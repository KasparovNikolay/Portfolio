import React, { FC, ReactNode } from 'react';

import { useScrollChange } from '../../../utils/useScrollChange';

import styles from './layout.module.scss';

type LayoutProps = { children: ReactNode | ReactNode[] };

const Layout: FC<LayoutProps> = ({ children }) => {
  const { ref } = useScrollChange();

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
};

export default Layout;

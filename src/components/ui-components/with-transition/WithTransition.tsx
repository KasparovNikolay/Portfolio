import React, { FC, ReactNode } from 'react';

import { useTransition, useTransitionProps } from '@utils/hooks';

import styles from './withTransition.module.scss';

type WithTransitionProps = useTransitionProps & { children: ReactNode };

const WithTransition: FC<WithTransitionProps> = (props) => {
  const { style } = useTransition({ ...props, inTransitionComponent: true });
  return (
    <div className={styles.transition} style={style}>
      {props.children}
    </div>
  );
};

export default WithTransition;

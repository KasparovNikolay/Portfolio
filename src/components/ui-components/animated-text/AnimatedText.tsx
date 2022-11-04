import React, { FC } from 'react';

import styles from './animatedText.module.scss';

export type AnimatedTextProps = {
  children: string;
};

const AnimatedText: FC<AnimatedTextProps> = ({ children }) => {
  return <span className={styles.animated}>{children}</span>;
};

export default AnimatedText;

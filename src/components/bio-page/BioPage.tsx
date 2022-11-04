import React, { FC } from 'react';

import { AnimatedText } from '@ui/animated-text';
import { useTransition } from '@utils/hooks';

// import styles from './bioPage.module.scss';

export type BioProps = {};

const BioPage: FC<BioProps> = () => {
  const { style } = useTransition({
    type: 'transition',
    direction: 'left',
    fade: true,
  });
  return (
    <h1 style={style}>
      <AnimatedText>Biography</AnimatedText>
    </h1>
  );
};

export default BioPage;

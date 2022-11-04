import React, { FC, memo } from 'react';

import { useTransition } from '@utils/hooks';

import AnimatedText from '../ui-components/animated-text/AnimatedText';

import styles from './homePage.module.scss';

const text = {
  ru: 'Меня зовут Николай.',
  en: 'Hi, my name is Nikolay.',
};

const HomePage: FC = () => {
  const { style } = useTransition({
    type: 'transition',
    direction: 'top',
    fade: true,
  });
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title} style={style}>
        {text.en}
        <br />
        <AnimatedText>I am React Frontend developer.</AnimatedText>
        <br />
        And this is my site-resume
      </h1>
    </div>
  );
};

export default memo(HomePage);

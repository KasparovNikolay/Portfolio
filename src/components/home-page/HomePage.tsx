import React, { FC, memo } from 'react';

import { useTransition } from '@utils/hooks';

import AnimatedText from '../ui-components/animated-text/AnimatedText';
import WithTransition from '../ui-components/with-transition/WithTransition';

import styles from './homePage.module.scss';

const text = {
  ru: 'Меня зовут Николай.',
  en: 'Hi, my name is Nikolay.',
};

const HomePage: FC = () => {
  return (
    <div className={styles.wrap}>
      <WithTransition type="transition" fade direction="top">
        <h1 className={styles.title}>
          {text.en}
          <br />
          <AnimatedText>I am React Frontend developer.</AnimatedText>
          <br />
          And this is my site-resume
        </h1>
      </WithTransition>
    </div>
  );
};

export default memo(HomePage);

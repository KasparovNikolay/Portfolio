import React, { FC, memo } from 'react';

import { useTransition } from '@utils/useTransition';

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
        <span className={styles.animated}>I am React Frontend developer.</span>
        <br />
        And this is my site-resume
      </h1>
    </div>
  );
};

export default memo(HomePage);

import React, { FC } from 'react';

import styles from './homePage.module.scss';

const text = {
  ru: 'Меня зовут Николай.',
  en: 'Hi, my name is Nikolay.',
};

const HomePage: FC = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        {text.en}
        <br />
        <span className={styles.animated}>I am React Frontend developer.</span>
        <br />
        And this is my site-resume
      </h1>
    </div>
  );
};

export default HomePage;

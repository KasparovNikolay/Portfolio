import React, { FC } from "react";

import styles from "./homePage.module.scss";

export type HomePageProps = {};

const text = {
  ru: "",
  en: "Hi, my name is Nikolay. Im frontend developer. And this my site.",
};

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.wrap}>
      <h1>{text.en}</h1>
    </div>
  );
};

export default HomePage;

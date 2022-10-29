import React, { FC } from "react";

import styles from "./errorPage.module.scss";

export type ErrorPageProps = {};

const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>Something went wrong...</h1>
    </div>
  );
};

export default ErrorPage;

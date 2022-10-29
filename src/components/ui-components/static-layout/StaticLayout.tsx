import React, { FC } from "react";

import { Children } from "../../../utils/types";

import styles from "./staticLayout.module.scss";

export type StaticLayoutProps = { children: Children };

const StaticLayout: FC<StaticLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default StaticLayout;

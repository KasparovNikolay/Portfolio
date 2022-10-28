import React, { FC, ReactNode } from "react";

import styles from "./layout.module.scss";
import { useScrollChange } from "../../utils/useScrollChange";

type LayoutProps = { children: ReactNode | ReactNode[] };

const Layout: FC<LayoutProps> = ({ children }) => {
  const { ref } = useScrollChange();

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
};

export default Layout;

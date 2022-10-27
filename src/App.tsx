import React, {FC, StrictMode} from "react";

import styles from './styles.scss';

export const App: FC =  () => {
  return (
    <StrictMode>
      <div className={styles.div}>App</div>
    </StrictMode>
  )
};

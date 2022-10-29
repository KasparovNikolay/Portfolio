import React, { FC } from "react";

import styles from "./skills.module.scss";
import { mockTechnologies } from "../../utils/mockTechnologies";

export type SkillsProps = {};

const Skills: FC<SkillsProps> = () => {
  return (
    <div className={styles.wrap}>
      {mockTechnologies.map(({ imgUrl, title }) => (
        <div key={imgUrl} className={styles.item}>
          <img
            src={imgUrl}
            alt="imgUrl"
            width={50}
            className={styles.item_img}
          />
          <span className={styles.item_title}>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;

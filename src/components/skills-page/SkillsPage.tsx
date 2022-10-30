import React, { FC } from "react";

import { mockTechnologies } from "../../utils/mockTechnologies";
import { Image } from "../ui-components/image";

import styles from "./skills.module.scss";

const SkillsPage: FC = () => {
  return (
    <div className={styles.wrap}>
      {mockTechnologies.map(({ imgUrl, title }) => (
        <div key={imgUrl} className={styles.item}>
          <Image
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

export default SkillsPage;

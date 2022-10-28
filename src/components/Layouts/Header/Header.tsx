import React, { FC, memo } from "react";

import styles from "./header.module.scss";
import Link from "../Link/Link";

const text = {
  contact: {
    en: "contact",
    ru: "контакты",
  },
  skills: {
    en: "skills",
    ru: "навыки",
  },
  expirience: {
    en: "expirience",
    ru: "опыт",
  },
  projects: {
    en: "projects",
    ru: "проекты",
  },
};

const Header: FC = () => {
  const lang = "ru";
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.header_link} href="#">
          {text.contact[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {text.skills[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {text.expirience[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {text.projects[lang]}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

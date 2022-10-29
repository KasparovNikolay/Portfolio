import React, { FC } from "react";

import { getNavbar } from "../../../utils/mockNavbar";
import Link from "../Link/Link";

import styles from "./header.module.scss";

const Header: FC = () => {
  const lang = "ru";
  const mockNavbar = getNavbar();
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={styles.header_link} href="#">
          {mockNavbar.home[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {mockNavbar.contact[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {mockNavbar.skills[lang]}
        </Link>
        <Link className={styles.header_link} href="#">
          {mockNavbar.projects[lang]}
        </Link>
      </nav>
    </header>
  );
};

export default Header;

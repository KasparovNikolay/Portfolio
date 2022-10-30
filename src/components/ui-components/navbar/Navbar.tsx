import React, { FC } from "react";

import { getNavbar } from "../../../utils/mockNavbar";
import { Link } from "../link";

import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  const lang = "en";
  return (
    <nav className={styles.navbar}>
      {getNavbar().map((item) => (
        <Link
          className={styles.navbar_link}
          href={item["en"] === "home" ? "/" : "/" + item["en"]}
          key={item["en"]}
          type="navlink"
          activeClassName={styles.navbar_link_active}
        >
          {item[lang]}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

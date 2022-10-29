import React, { FC } from "react";
import cls from "classnames";

import { getNavbar } from "../../../utils/mockNavbar";
import Link from "../Link/Link";

import styles from "./navbar.module.scss";

const Navbar: FC = () => {
  const lang = "en";
  return (
    <nav className={styles.navbar}>
      {getNavbar().map((item) => (
        <Link
          className={cls(styles.navbar_link, styles.navbar_link_active)}
          href={item["en"] === "home" ? "/" : "/" + item["en"]}
          key={item["en"]}
          type="navlink"
        >
          {item[lang]}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

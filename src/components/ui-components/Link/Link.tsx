import React, { FC, ReactNode } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import cls from "classnames";

import styles from "./link.module.scss";

export type LinkProps = {
  type?: "inner" | "outer" | "navlink";
  href: string;
  className?: string;
  children: ReactNode | ReactNode[] | string | null | undefined;
  activeClassName?: string;
};

const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  type = "inner",
  activeClassName,
  ...props
}) => {
  if (!children || !href) return null;
  if (type === "inner") {
    return (
      <RouterLink to={href} className={cls(className, styles.link)}>
        {children}
      </RouterLink>
    );
  }

  if (type === "navlink") {
    return (
      <NavLink
        to={href}
        className={({ isActive }) =>
          cls(className, isActive && (activeClassName || styles.link))
        }
      >
        {children}
      </NavLink>
    );
  }

  return (
    <a {...props} href={href} className={cls(className, styles.link)}>
      {children}
    </a>
  );
};

export default Link;

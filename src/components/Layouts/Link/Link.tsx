import React, { FC, ReactNode } from "react";
import cls from "classnames";

import styles from "./link.module.scss";

export type LinkProps = {
  isOuterLink?: boolean;
  href: string;
  className?: string;
  children: ReactNode | ReactNode[] | string | null | undefined;
};

const Link: FC<LinkProps> = ({
  children,
  className,
  href,
  // isOuterLink = false,
  ...props
}) => {
  if (!children) return null;
  return (
    <a {...props} href={href} className={cls(className, styles.link)}>
      {children}
    </a>
  );
};

export default Link;

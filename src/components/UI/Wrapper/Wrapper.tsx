import React, { FC } from "react";
import styles from "./Wrapper.module.css";

type Props = {
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

const Wrapper: FC<Props> = ({ children, className }) => {
  return <div className={`${styles.wrap} ${className}`}>{children}</div>;
};

export default Wrapper;

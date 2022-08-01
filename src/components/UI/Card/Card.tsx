import React, { FC } from "react";
import styles from "./Card.module.css";
interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[] | string;
}

const Card: FC<Props> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;

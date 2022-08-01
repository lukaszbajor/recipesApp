import React, { FC } from "react";
import Subtitle from "../UI/Subtitle/Subtitle";
import Text from "../UI/Text/Text";
import styles from "./Option.module.css";
interface Props {
  children?: JSX.Element | JSX.Element[];
}
const Option: FC<Props> = ({ children }) => {
  return <div className={styles.option}>{children}</div>;
};

export default Option;

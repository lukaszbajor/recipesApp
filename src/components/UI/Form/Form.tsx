import React, { FC } from "react";
import styles from "./Form.module.css";
interface Props {
  className: string;
  onSubmit: (e: any) => void;
  children?: JSX.Element | JSX.Element[] | string;
}
const Form: FC<Props> = ({ className, onSubmit, children }) => {
  return (
    <form className={`${className} ${styles.form}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

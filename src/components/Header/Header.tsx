import React, { FC } from "react";
import styles from "./Header.module.css";
const Header: FC = (props) => {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>RecipesApp</p>
    </header>
  );
};

export default Header;

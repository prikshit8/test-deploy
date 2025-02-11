import React from "react";
import styles from "./Button.module.css";

const Button: React.FC = () => {
  return (
    <button className={styles.button}>Click Me</button>
  );
};

export default Button;

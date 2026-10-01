import React from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {
  return (
    <button type="button" className={styles.button} {...props}>
      {title}
    </button>
  );
}

export default Button;

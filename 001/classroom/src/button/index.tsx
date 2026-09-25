import styles from "./styles.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {}

function Button({ name, ...props }: ButtonProps) {
  return (
    <button className={styles.container} {...props}>
      <span>{name}</span>
    </button>
  );
}

export { Button };

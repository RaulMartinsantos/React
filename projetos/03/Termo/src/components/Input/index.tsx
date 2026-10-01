import styles from "./styles.module.css";

interface InputProps extends React.ComponentProps<"input"> {}

function Input({ ...props }: InputProps) {
  return <input type="text" className={styles.input} {...props} />;
}

export default Input;

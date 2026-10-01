import styles from "./styles.module.css";

type Props = {
  value?: string;
  size?: "default" | "small";
  color?: "default" | "correct" | "wrong";
};

function Letter({ value = "", size = "default", color = "default" }: Props) {
  return (
    <div
      className={`
    ${size === "small" ? styles.letterSmall : styles.letter}
    ${color === "correct" && styles.lettersCorrect}
    ${color === "wrong" && styles.lettersWrong}
    `}
    >
      <span>{value}</span>
    </div>
  );
}

export default Letter;

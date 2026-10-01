import Letter from "../Letter";
import styles from "./styles.module.css";

function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letras utilizadas</h5>

      <div>
        <Letter value="x" size="small" color="correct" />
        <Letter value="x" size="small" color="wrong" />
      </div>
    </div>
  );
}

export default LettersUsed;

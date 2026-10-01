import styles from "./styles.module.css";
import tipIcon from "../../assets/idea-svgrepo-com.svg";

type Props = {
  tip: string;
};

function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="ícone de dica" />

      <div>
        <h3>Dica</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}

export default Tip;

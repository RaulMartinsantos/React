import "./global.css";
import { Button } from "./button";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => alert("Editar")} />
      <span>0</span>
      <Button name="Deletar" onClick={() => alert("Deletar")} />
    </div>
  );
}

export { App };

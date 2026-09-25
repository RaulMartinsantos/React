import "./global.css";
import { Button } from "./button";
import styles from "./app.module.css";
import useMessage from "./hooks/useMessage";

function App() {
  const user = {
    name: "Raul",
  };

  const { show } = useMessage({ name: user.name });

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => show("Olá mundo!!")} />
      <span>0</span>
      <Button name="Deletar" onClick={() => alert("Deletar")} />
    </div>
  );
}

export { App };

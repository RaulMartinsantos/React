import "./global.css";
import React, { useEffect } from "react";
import { Button } from "./button";
import styles from "./app.module.css";
import useMessage from "./hooks/useMessage";

function App() {
  const [count, setCount] = React.useState(0);

  const user = {
    name: "Raul",
  };

  const { show } = useMessage({ name: user.name });

  useEffect(() => {
    if (count > 0) {
      console.log(`O valor mudou para ${count}`);
    }
  }, [count]);

  return (
    <div className={styles.container}>
      <Button name="Adicionar" onClick={() => setCount((c) => c + 1)} />
      <span>{count}</span>
      <Button
        name="Deletar"
        onClick={() => setCount((c) => Math.max(0, c - 1))}
      />
    </div>
  );
}

export { App };

import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createServer } from "miragejs";
import { createRoot } from "react-dom/client";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "food",
          createdAt: "12/08/21",
        },
      ];
    });
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

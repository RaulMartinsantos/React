import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createServer, Model } from "miragejs";
import { createRoot } from "react-dom/client";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance website",
          amount: 6000,
          category: "Dev",
          type: "deposit",
          createdAt: new Date("2022-11-21T13:02:30"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1200,
          category: "aluguel",
          type: "withdraw",
          createdAt: new Date("2022-10-21T12:02:30"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", (schema) => {
      return schema.all("transaction");
    });

    this.post("/transactions", (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create("transaction", data);
    });
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

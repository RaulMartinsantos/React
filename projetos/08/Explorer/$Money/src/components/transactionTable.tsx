import { useEffect, useState } from "react";
import api from "../services/api";
import Container from "./container";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      console.log("Dados:", response.data);
      console.log("Tipo:", typeof response.data);
      console.log("Array:", Array.isArray(response.data));
      console.log("Chaves:", Object.keys(response.data));

      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <Container className="mt-16">
      <table className="w-full table-fixed border-separate border-spacing-y-1 text-[1rem]">
        <thead className="text-text-body font-bold text-left leading-6">
          <tr>
            <th className="px-4 py-8">Título</th>
            <th className="px-4 py-8">Valor</th>
            <th className="px-4 py-8">Categoria</th>
            <th className="px-4 py-8 max-sm:px-2 max-sm:py-8">Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="bg-shape text-[1.3rem] text-text-title p-5">
                {transaction.title}
              </td>

              <td
                className={`
                  bg-shape text-[1.3rem] p-5 
                  ${transaction.type === "deposit" ? "text-green " : "text-red"} 
                `}
              >
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>

              <td className="bg-shape text-[1.3rem] text-text-body p-5">
                {transaction.category}
              </td>

              <td className="bg-shape text-[1.3rem] text-text-body p-5">
                {new Intl.DateTimeFormat("pt-br", {}).format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionTable;

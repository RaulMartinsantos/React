import api from "./src/services/api";
import { createContext, useEffect, useState, type ReactNode } from "react";
import type Transaction from "./src/utils/transactionType";

interface TransactionsContextProps {
  children: ReactNode;
}

const TransactionContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionsContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;

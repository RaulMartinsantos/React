import Modal from "react-modal";
import { Children, useState } from "react";
import Header from "./components/header";
import TransactionContext, {
  TransactionsProvider,
} from "./hooks/useTransactions";
import Dashboard from "./components/dashboard";
import TransactionTable from "./components/transactionTable";
import NewTransactionModal from "./components/newTransactionModal";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onClick={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        isClosed={handleCloseNewTransactionModal}
      />
      <TransactionTable />
    </TransactionsProvider>
  );
}

export default App;

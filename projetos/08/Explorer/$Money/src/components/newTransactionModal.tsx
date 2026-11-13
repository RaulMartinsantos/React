import Modal from "react-modal";
import api from "../services/api";
import RadioBox from "./radioBox";
import TransactionContext from "../../transactionContext";
import { useState, useContext, type SubmitEvent } from "react";
import { CircleArrowDown, CircleArrowUp, X } from "lucide-react";

interface NewTransactionModalProps {
  isOpen: boolean;
  isClosed: () => void;
}

function NewTransactionModal({
  isOpen,
  isClosed,
  ...props
}: NewTransactionModalProps) {
  const [type, setType] = useState<"deposit" | "withdraw" | undefined>(
    undefined,
  );
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const transactions = useContext(TransactionContext)

  async function handleCreateNewTransaction(e: SubmitEvent) {
    e.preventDefault();

    const data = {
      title,
      value,
      type,
      category,
    };

    await api.post("/transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClosed}
      {...props}
      overlayClassName="react-modal-overlay"
      className={`react-modal-content`}
    >
      <button
        type="button"
        onClick={isClosed}
        className="react-modal-close-button text-text-body"
        aria-label="Fechar modal"
      >
        <X className="" />
      </button>
      <form onSubmit={handleCreateNewTransaction}>
        <h2 className="text-text-title text-2xl mb-8">Cadastrar transação</h2>
        <input
          value={title}
          className="placeholder:text-text-body w-full px-6 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem]"
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={value}
          className="placeholder:text-text-body w-full px-6 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem] mt-4"
          type="number"
          placeholder="Valor"
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <div className="mt-4 grid grid-cols-2 gap-2 max-sm:grid-cols-1">
          <RadioBox
            transactionType="deposit"
            label="Entrada"
            icon={CircleArrowUp}
            iconClassName="text-green"
            currentState={type}
            onClick={() => setType("deposit")}
          />

          <RadioBox
            transactionType="withdraw"
            label="Saida"
            icon={CircleArrowDown}
            iconClassName="text-red"
            currentState={type}
            onClick={() => setType("withdraw")}
          />
        </div>

        <input
          value={category}
          className="placeholder:text-text-body w-full mt-4 px-6 py-0 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem]"
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          className="w-full p-6 bg-green text-white rounded-sm text-[1rem] mt-6 hover:brightness-75 transition-[filter] ease-linear font-semibold"
          type="submit"
        >
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}

export default NewTransactionModal;

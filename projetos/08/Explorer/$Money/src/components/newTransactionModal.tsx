import Modal from "react-modal";
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
      <form>
        <h2 className="text-text-title text-2xl mb-8">Cadastrar transação</h2>
        <input
          className="placeholder:text-text-body w-full px-6 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem]"
          placeholder="Título"
        />
        <input
          className="placeholder:text-text-body w-full px-6 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem] mt-4"
          type="number"
          placeholder="Valor"
        />

        <div className="mt-4 grid grid-cols-2 gap-2 max-sm:grid-cols-1">
          <button
            type="button"
            className={`
              "h-16 border border-border-color rounded-sm flex items-center justify-center hover:border-border-hover transition-[filter] ease-linear
            `}
          >
            <CircleArrowUp className="text-green-400 h-5 w-5" />
            <span className="inline ml-4 text-[1rem]">Entrada</span>
          </button>

          <button
            type="button"
            className={`
              h-16 border border-border-color rounded-sm flex items-center justify-center hover:border-border-hover transition-[filter] ease-linear
            `}
          >
            <CircleArrowDown className="text-red-400 h-5 w-5" />
            <span className="inline ml-4 text-[1rem]">Saída</span>
          </button>
        </div>

        <input
          className="placeholder:text-text-body w-full mt-4 px-6 py-0 h-16 rounded-sm bg-input-bg border border-border-color font-normal text-[1rem]"
          placeholder="Categoria"
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

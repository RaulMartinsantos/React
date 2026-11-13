import { CircleArrowUp, CircleArrowDown, DollarSign } from "lucide-react";
import TransactionContext from "../../transactionContext";
import { useContext } from "react";

function Summary() {
  const { transactions } = useContext(TransactionContext);
  console.log(transactions);

  return (
    <>
      <div
        className={`
        bg-shape py-6 px-8 rounded-md shadow-2xs 
        flex justify-center items-center flex-col
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Entradas</p>
          <CircleArrowUp className="text-green-400" />
        </header>
        <strong className="block mt-4 text-[2rem] max-sm:text-[1.5rem] leading-12">
          R$1000,00
        </strong>
      </div>

      <div
        className={`
        bg-shape py-5 px-8 rounded-md flex shadow-2xs 
        justify-center items-center flex-col
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Saídas</p>
          <CircleArrowDown className="text-red-400" />
        </header>
        <strong className="block mt-4 text-[2rem] max-sm:text-[1.4rem] leading-12 whitespace-nowrap">
          - R$600,00
        </strong>
      </div>

      <div
        className={`
         bg-green py-5 px-8 rounded-md text-white 
         shadow-2xs flex justify-center flex-col items-center
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Total</p>
          <DollarSign />
        </header>
        <strong className="block mt-4 text-[2rem] max-sm:text-[1.5rem] leading-12 whitespace-nowrap">
          R$400,00
        </strong>
      </div>
    </>
  );
}

export default Summary;

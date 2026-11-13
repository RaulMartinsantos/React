import SummaryTotal from "./summaryTotal";
import useTransaction from "../hooks/useTransactions";
import { CircleArrowUp, CircleArrowDown } from "lucide-react";

function Summary() {
  const { transactions } = useTransaction();

  const totalDeposit = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      return acc + Number(transaction.amount);
    }

    return acc;
  }, 0);

  const totalWithdraw = transactions.reduce((acc, transaction) => {
    if (transaction.type === "withdraw") {
      return acc + Number(transaction.amount);
    }
    return acc;
  }, 0);

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
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl",
          }).format(totalDeposit)}
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
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "brl",
          }).format(-totalWithdraw)}
        </strong>
      </div>

      <SummaryTotal
        deposit={totalDeposit}
        withdraw={totalWithdraw}
      ></SummaryTotal>
    </>
  );
}

export default Summary;

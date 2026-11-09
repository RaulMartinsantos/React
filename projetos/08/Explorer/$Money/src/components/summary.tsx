import { CircleArrowUp, CircleArrowDown, DollarSign } from "lucide-react";

function Summary() {
  return (
    <>
      <div
        className={`
        bg-shape py-8 px-8 rounded-md shadow-2xs flex justify-center items-center flex-col
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Entradas</p>
          <CircleArrowUp className="text-green-400" />
        </header>
        <strong className="block mt-4 text-[2rem] max-md:text-[1.5rem] leading-12">
          R$1000,00
        </strong>
      </div>

      <div
        className={`
        bg-shape py-5 px-8 rounded-md flex justify-center items-center flex-col
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Saídas</p>
          <CircleArrowDown className="text-red-400" />
        </header>
        <strong className="block mt-4 text-[2rem] max-md:text-[1.4rem] leading-12 whitespace-nowrap">
          - R$600,00
        </strong>
      </div>

      <div
        className={`
        py-5 px-8 rounded-md bg-green text-white flex justify-center flex-col items-center
      `}
      >
        <header className="flex items-center justify-between w-full">
          <p>Total</p>
          <DollarSign />
        </header>
        <strong className="block mt-4 text-[2rem] max-md:text-[1.5rem] leading-12 whitespace-nowrap">
          R$400,00
        </strong>
      </div>
    </>
  );
}

export default Summary;

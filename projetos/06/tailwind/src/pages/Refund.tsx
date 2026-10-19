import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import CATEGORIES, { CATEGORIES_KEYS } from "../utils/categories";
import Upload from "../components/upload";

function Refund() {
  const [category, setCategory] = useState("");
  return (
    <form
      className={`
      bg-gray-500 w-full rounded-xl flex flex-col
        p-10 gap-6 lg:min-w-[512px]
      `}
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
        <Input required legend="nome da solicitação" />

        <div className="flex justify-between gap-4 items-center">
          <Select
            legend="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES_KEYS.map((category) => (
              <option key={category} value={category}>
                {CATEGORIES[category].name}
              </option>
            ))}
          </Select>
          <Input legend="valor" />
        </div>
        <Upload legend="comprovante" />
      </header>
    </form>
  );
}

export default Refund;

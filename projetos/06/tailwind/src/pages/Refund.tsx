import { useState } from "react";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import Upload from "../components/upload";
import { useNavigate } from "react-router";
import CATEGORIES, { CATEGORIES_KEYS } from "../utils/categories";

function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFileName] = useState<File | null>(null);

  const navigate = useNavigate();

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name, amount, category, isLoading, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`
      bg-gray-500 w-full rounded-xl flex flex-col
        p-10 gap-6 lg:max-w-[700px] m-auto
      `}
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
        <Input
          required
          legend="nome da solicitação"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          <Input
            legend="valor"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </div>
        <Upload
          legend="comprovante"
          filename={filename && filename.name}
          onChange={(e) => e.target.files && setFileName(e.target.files[0])}
        />

        <Button type="submit" isLoading={isLoading}>
          Enviar
        </Button>
      </header>
    </form>
  );
}

export default Refund;

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import SearchSvg from "../assets/search.svg";
import CATEGORIES from "../utils/categories";
import RefundItem, { type RefundItemProps } from "../components/RefundItem";

const refund_example: RefundItemProps = {
  id: "123",
  name: "Raul",
  category: "Alimentação",
  amount: "12,99",
  categoryImg: CATEGORIES["food"].icon,
};

function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px] lg:max-w-[1000px] m-4 lg:m-auto">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
      <form
        onSubmit={fetchRefunds}
        className={`
        flex flex-1 items-center justify-between 
        border-b-[1px] border-b-gray-400
        md:flex-row gap-2 mt-6 pb-6
      `}
      >
        <Input
          placeholder="pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button variant="icon" type="submit">
          <img src={SearchSvg} alt="ícone de pesquisa" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[400px] overflow-y-scroll">
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
        <RefundItem data={refund_example} />
      </div>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import SearchSvg from "../assets/search.svg";

function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px] lg:max-w-[1000px] m-auto">
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
    </div>
  );
}

export default Dashboard;

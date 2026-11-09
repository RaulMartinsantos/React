import { useEffect } from "react";
import api from "../services/api";
import Container from "./container";

function TransactionTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container className="mt-16">
      <table className="w-full table-fixed border-separate border-spacing-y-1 text-[1.rem]">
        <thead className="text-text-body font-bold text-left leading-6">
          <tr>
            <th className="px-4 py-8 ">Título</th>
            <th className="px-4 py-8">Valor</th>
            <th className="px-4 py-8">Categoria</th>
            <th className="px-4 py-8 max-sm:px-2 max-sm:py-8">Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="bg-shape text-[1.3rem] text-text-title p-5">
              Vendas sorbet
            </td>
            <td className="bg-shape text-[1.3rem] text-green p-5">R$1000,00</td>
            <td className="bg-shape text-[1.3rem] text-text-body p-5">
              Vendas
            </td>
            <td className="bg-shape text-[1.3rem] text-text-body p-5">
              12/09/26
            </td>
          </tr>

          <tr>
            <td className="bg-shape text-[1.3rem] text-text-title p-5">
              Aluguel
            </td>
            <td className="bg-shape text-[1.3rem] text-red p-5 whitespace-nowrap">
              - R$600,00
            </td>
            <td className="bg-shape text-[1.3rem] text-text-body p-5">Casa</td>
            <td className="bg-shape text-[1.3rem] text-text-body p-5">
              06/10/26
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionTable;

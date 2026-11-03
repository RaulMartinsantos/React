import { useEffect, useState } from "react";
import api from "../services/api";
import { AxiosError } from "axios";
import { Search } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import CATEGORIES from "../utils/categories";
import Pagination from "../components/Pagination";
import { formatCurrency } from "../utils/formatCurrency";
import RefundItem, { type RefundItemProps } from "../components/RefundItem";

const PER_PAGE = 2;

function Dashboard() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([]);

  async function fetchRefunds() {
    try {
      const response = await api.get<RefundsPaginationAPIResponse>(
        `/refunds?name=${name.trim()}&page=${page}&perPage=${PER_PAGE}`,
      );
      setRefunds(
        response.data.refunds.map((refund) => ({
          id: refund.id,
          name: refund.user.name,
          description: refund.name,
          amount: formatCurrency(refund.amount),
          categoryImg: CATEGORIES[refund.category].icon,
        })),
      );

      console.log(response);

      setTotalPages(
        (response.data.pagination.totalPages = 0
          ? 1
          : response.data.pagination.totalPages),
      );
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data.message);
      }
      console.log(err);
    }
  }

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    fetchRefunds();
  }

  function HandlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalPages) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  useEffect(() => {
    fetchRefunds();
  }, [page]);

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px] lg:max-w-[1000px] m-auto">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
      <form
        onSubmit={handleSubmit}
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
          <Search />
        </Button>
      </form>

      <div className="my-6 flex flex-col gap-4 max-h-[400px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} to={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination
        onNext={() => HandlePagination("next")}
        onPrevious={() => HandlePagination("previous")}
        current={page}
        total={totalPages}
      />
    </div>
  );
}

export default Dashboard;

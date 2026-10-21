import Button from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

interface PaginationProps extends React.ComponentProps<"button"> {
  current: number;
  total: number;
}

function Pagination({ current, total }: PaginationProps) {
  return (
    <div className="flex flex-1 justify-center items-center gap-4">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="ícone de voltar" className="w-4" />
      </Button>

      <span className="text-sm text-gray-200 pt-6">
        {current}/{total}
      </span>

      <Button variant="iconSmall">
        <img src={rightSvg} alt="ícone de avançar" className="w-5" />
      </Button>
    </div>
  );
}

export default Pagination;

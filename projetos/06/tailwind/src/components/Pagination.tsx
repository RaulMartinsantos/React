import Button from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

interface PaginationProps extends React.ComponentProps<"button"> {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
}

function Pagination({ current, total, onNext, onPrevious }: PaginationProps) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
        <img src={leftSvg} alt="ícone de voltar" className="w-4" />
      </Button>

      <span className="text-sm text-gray-200 pt-6">
        {current}/{total}
      </span>

      <Button variant="iconSmall">
        <img
          src={rightSvg}
          onClick={onNext}
          alt="ícone de avançar"
          className="w-5"
        />
      </Button>
    </div>
  );
}

export default Pagination;

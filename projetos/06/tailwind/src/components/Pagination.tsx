import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <ChevronLeft />
      </Button>

      <span className="text-sm text-gray-200 pt-6">
        {current}/{total}
      </span>

      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <ChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;

import { Link } from "react-router";
import type { LucideIcon } from "lucide-react";

export type RefundItemProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  categoryImg: LucideIcon;
};

interface LinkProps extends Omit<React.ComponentProps<typeof Link>, "to"> {
  data: RefundItemProps;
  to: string;
}

function RefundItem({ data, to, className, ...props }: LinkProps) {
  const CategoryIcon = data.categoryImg;

  return (
    <Link
      to={to}
      {...props}
      className={`
      flex items-center gap-3 hover:bg-green-100/5
      cursor-pointer rounded-md p-2
      ${className ?? ""}
    `}
    >
      <CategoryIcon
        size="30px"
        className="text-green-100 bg-gray-300 rounded-lg p-1"
      />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.category}</span>
      </div>
      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {data.amount}
      </span>
    </Link>
  );
}

export default RefundItem;

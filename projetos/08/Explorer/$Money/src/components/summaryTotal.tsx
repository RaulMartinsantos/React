import { DollarSign } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const SummaryTotalVariants = tv({
  base: "bg-green py-5 px-8 rounded-md text-white",
  variants: {
    color: {
      negative: "bg-red-950",
    },
  },
});

interface SummaryTotalProps
  extends
    VariantProps<typeof SummaryTotalVariants>,
    Omit<React.ComponentProps<"div">, "color"> {
  withdraw: number;
  deposit: number;
}

function SummaryTotal({ withdraw, deposit, className }: SummaryTotalProps) {
  const total = deposit - withdraw;

  return (
    <div
      className={SummaryTotalVariants({
        color: total < 0 ? "negative" : undefined,
        className,
      })}
    >
      <header className="flex items-center justify-between w-full">
        <p>Total</p>
        <DollarSign />
      </header>
      <strong className="block mt-4 text-[2rem] max-sm:text-[1.5rem] leading-12 whitespace-nowrap">
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "brl",
        }).format(total)}
      </strong>
    </div>
  );
}

export default SummaryTotal;

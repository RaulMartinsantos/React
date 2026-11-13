import { type LucideIcon, type LucideProps } from "lucide-react";
import { tv, type VariantProps} from "tailwind-variants";
export type TransactionType = "deposit" | "withdraw" | undefined;

const radioBoxVariants = tv({
  base: `
  border-border-color border rounded-sm flex items-center justify-center
  hover:border-border-hover transition-colors ease-linear h-16
  `,
  variants: {
    variant: {
      deposit: "border-green-500 bg-green-500/10 hover:border-green-500",
      withdraw: "border-red-500 bg-red-500/10 hover:border-red-500",
    },
  },
});

interface RadioBoxProps
  extends
    VariantProps<typeof radioBoxVariants>,
    React.ComponentProps<"button"> {
  label: string;
  onClick: () => void;
  iconClassName?: LucideProps["className"];
  currentState: TransactionType;
  icon?: LucideIcon;
  transactionType: TransactionType;
}

function RadioBox({
  onClick,
  label,
  iconClassName,
  className,
  currentState,
  icon: Icon,
  transactionType,
  ...props
}: RadioBoxProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={radioBoxVariants({
        variant: currentState === transactionType ? currentState : undefined,
        className,
      })}
      {...props}
    >
      {Icon && <Icon className={iconClassName} />}
      <span className="inline ml-4 text-[1rem]">{label}</span>
    </button>
  );
}

export default RadioBox;

import { type LucideIcon } from "lucide-react";

export type TransactionType = "deposit" | "withdraw";

interface RadioBoxProps extends React.ComponentProps<"button"> {
  label: string;
  onClick: () => void;
  iconClassName?: string;
  icon?: LucideIcon;
  isSelected: boolean;
  variant: TransactionType;
}

function RadioBox({
  onClick,
  label,
  iconClassName,
  icon: Icon,
  isSelected,
  variant,
  ...props
}: RadioBoxProps) {
  const styles = {
    deposit: isSelected
      ? "border-green-500 bg-green-500/10"
      : "border-border-color hover:border-green-500",

    withdraw: isSelected
      ? "border-red-500 bg-red-500/10"
      : "border-border-color hover:border-red-500",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        h-16 border rounded-sm flex items-center justify-center
        transition-colors ease-linear
        ${styles[variant]}
      `}
      {...props}
    >
      {Icon && <Icon className={iconClassName} />}
      <span className="inline ml-4 text-[1rem]">{label}</span>
    </button>
  );
}

export default RadioBox;

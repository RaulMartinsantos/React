import classMerge from "../utils/classMerge";

interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
}

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-8 w-8",
  },
};

function Button({
  isLoading,
  type = "button",
  className,
  variant = "base",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...props}
      className={classMerge([
        `
      flex items-center justify-center bg-green-100 rounded-lg 
      text-white cursor-pointer hover:bg-green-200 
      transition ease-linear disabled:opacity-50 disabled:cursor- 
      disabled:hover:bg-green-100 w-full mt-6 disabled:cursor-default
    `,
        variants.button[variant],
        isLoading && "disabled:cursor-progress",
        className,
      ])}
    ></button>
  );
}

export default Button;

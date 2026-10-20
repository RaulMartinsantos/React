interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "base" | "icon";
}

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
  },
};

function Button({
  isLoading,
  type = "button",
  variant = "base",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...props}
      className={`
      flex items-center justify-center bg-green-100 rounded-lg 
      text-white cursor-pointer hover:bg-green-200 
      transition ease-linear disabled:opacity-50 disabled:cursor-progress 
      disabled:hover:bg-green-100 w-full mt-4
    `}
    ></button>
  );
}

export default Button;

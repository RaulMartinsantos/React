interface ButtonProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
}

function Button({ isLoading, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      disabled={isLoading}
      {...props}
      className={`
      flex items-center justify-center bg-green-100 rounded-lg 
      text-white cursor-pointer hover:bg-green-200 transition ease-linear 
      disabled:opacity-50 disabled:cursor-progress disabled:hover:bg-green-100
      h-12 w-full mt-4
    `}
    ></button>
  );
}

export default Button;

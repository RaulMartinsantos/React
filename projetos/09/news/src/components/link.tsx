import { ReactNode } from "react";

interface LinkProps extends React.ComponentProps<"a"> {
  to: string;
  children: ReactNode;
}

function Link({ children, to, ...props }: LinkProps) {
  return (
    <a
      href={to}
      {...props}
      className={`
        inline-block relative px-2 h-20 leading-[5rem] text-gray-300 
        hover:text-white transition-[color] ease-linear 



        after:-content-['']
        after:absolute after:bottom-[1px] after:left-0
        after:w-full after:h-1
        after:rounded-t-2xl
        after:bg-yellow-500
        after:scale-x-0
        after:transition-transform after:ease-linear

        hover:after:scale-x-100
      `}
    >
      {children}
    </a>
  );
}

export default Link;

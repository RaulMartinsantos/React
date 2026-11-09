import type { ReactNode } from "react";

interface ContainerProps extends React.ComponentProps<"div"> {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full max-w-[1120px] px-8 ${className}
    `}
    >
      {children}
    </div>
  );
}

export default Container;

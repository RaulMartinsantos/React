import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const containerVariants = cva(`mx-auto`, {
  variants: {
    size: {
      md: "max-w-126 px-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface ContainerProps
  extends VariantProps<typeof containerVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements;
}

function Container({
  as = "div",
  className,
  size,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    (as = "div"),
    {
      className: containerVariants({ size: "md", className }),
      size,
      ...props,
    },
    children,
  );
}

export default Container;

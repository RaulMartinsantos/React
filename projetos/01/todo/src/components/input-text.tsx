import { cva, type VariantProps, cx } from "class-variance-authority";
import { textVariants } from "./text";

export const inputTextVariant = cva(
  `
  border-b border-solid border-gray-200 focus:border-pink-base
  bg-transparent outline-none
  `,
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
      disabled: {
        true: "pointer-events-none",
      },
    },

    defaultVariants: {
      size: "md",
      disabled: false,
    },
  },
);

interface InputTextProps
  extends
    VariantProps<typeof inputTextVariant>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {}

function InputText({ size, disabled, className, ...props }: InputTextProps) {
  return (
    <input
      className={cx(
        inputTextVariant({ size, disabled }),
        textVariants(),
        className,
      )}
      {...props}
    />
  );
}

export default InputText;

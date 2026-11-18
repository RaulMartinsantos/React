import { tv, type VariantProps } from "tailwind-variants";

const subscribeButtonVariants = tv({
  base: `
   w-[260px] h-16 rounded-4xl bg-yellow-500 text-gray-900 text-2xl flex   items-center justify-center hover:brightness-80 transition-[filter] ease-linear
  `,
});

interface SubscribeButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof subscribeButtonVariants> {
      priceId: string
    }

function SubscribeButton({ className, priceId, ...props }: SubscribeButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={subscribeButtonVariants({ className })}
    >
      Subscribe Now
    </button>
  );
}

export default SubscribeButton;

"use client";

import { useSession, signIn } from "next-auth/react";
import { tv, type VariantProps } from "tailwind-variants";
import api from "../service/api";

const subscribeButtonVariants = tv({
  base: `
   w-[260px] h-16 rounded-4xl bg-yellow-500 text-gray-900 text-2xl flex   items-center justify-center hover:brightness-80 transition-[filter] ease-linear
  `,
});

interface SubscribeButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof subscribeButtonVariants> {
  priceId: string;
}

function SubscribeButton({
  className,
  priceId,
  ...props
}: SubscribeButtonProps) {
  const { data: session } = useSession();
  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const url = response.data.url;

      console.log(response.data);

      if (!url) {
        throw new Error("URL não encontrada");
      }

      window.location.href = url;
    } catch (err) {
      console.error("Falha no handleSubscribe:", err);
    }
  }

  return (
    <button
      type="button"
      {...props}
      className={subscribeButtonVariants({ className })}
      onClick={handleSubscribe}
    >
      Subscribe Now
    </button>
  );
}

export default SubscribeButton;

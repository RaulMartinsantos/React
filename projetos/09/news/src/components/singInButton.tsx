"use client";

import { FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { tv, type VariantProps } from "tailwind-variants";
import { signIn, signOut, useSession } from "next-auth/react";

const signInButtonVariants = tv({
  base: `
    h-12 bg-gray-850 flex items-center justify-center px-6 rounded-[3rem]
    font-bold text-white  hover:brightness-80 transition-[filter] ease-linear
  `,
});

interface SignInButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof signInButtonVariants> {}

function SingInButton({ className, ...props }: SignInButtonProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null;
  }

  return session ? (
    <button
      type="button"
      {...props}
      className={signInButtonVariants({ className })}
    >
      <FaGithub color="#04d361" className="h-[20px] w-[20px] mr-4" />
      {session.user?.name}
      <FiX color="#737380" className="ml-4" onClick={() => signOut()} />
    </button>
  ) : (
    <button
      type="button"
      {...props}
      className={signInButtonVariants({ className })}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#eba417" className="h-[20px] w-[20px] mr-4" />
      Sing in with Github
    </button>
  );
}

export default SingInButton;

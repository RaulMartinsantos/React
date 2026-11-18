import { FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { tv, type VariantProps } from "tailwind-variants";

const singInButtonVariants = tv({
  base: `
    h-12 bg-gray-850 flex items-center justify-center px-6 rounded-[3rem]
  text-white font-bold hover:brightness-80 transition-[filter] ease-linear
  `,
});

interface SingInButtonProps
  extends
    React.ComponentProps<"button">,
    VariantProps<typeof singInButtonVariants> {}

function SingInButton({ className, ...props }: SingInButtonProps) {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      {...props}
      className={singInButtonVariants({ className })}
    >
      <FaGithub color="#04d361" className="h-[20px] w-[20px] mr-4" />
      Raul Santos
      <FiX color="#737380" className="ml-4" />
    </button>
  ) : (
    <button
      type="button"
      {...props}
      className={singInButtonVariants({ className })}
    >
      <FaGithub color="#eba417" className="h-[20px] w-[20px] mr-4" />
      Sing in with Github
    </button>
  );
}

export default SingInButton;

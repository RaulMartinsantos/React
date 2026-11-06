import logoSvg from "/refund.svg?url";
import { LogOut } from "lucide-react";
import useAuth from "../hooks/useAuth";

interface HeaderProps extends React.ComponentProps<"header"> {}

function Header({ ...props }: HeaderProps) {
  const { session, remove } = useAuth();
  const userName =
    session?.user.name.charAt(0).toUpperCase() + session?.user.name.slice(1)!;

  return (
    <header {...props} className="flex items-center justify-between px-5">
      <img src={logoSvg} alt="logo" className="w-10 my-8" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          {`Olá, ${userName ? userName : ""}`}
        </span>
        <LogOut
          onClick={remove}
          className="w-10 my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}

export default Header;

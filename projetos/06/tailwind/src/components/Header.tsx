import logoSvg from "/refund.svg?url";
import { LogOut } from "lucide-react";
import useAuth from "../hooks/useAuth";

interface HeaderProps extends React.ComponentProps<"header"> {}

function Header({ ...props }: HeaderProps) {
  const auth = useAuth();
  return (
    <header {...props} className="flex items-center justify-between px-5">
      <img src={logoSvg} alt="logo" className="w-10 my-8" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          {`Olá, ${auth.session?.user.name}`}
        </span>
        <LogOut
          onClick={auth.remove}
          className="w-10 my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}

export default Header;

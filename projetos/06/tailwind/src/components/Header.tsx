import logoSvg from "/refund.svg?url";
import { LogOut } from "lucide-react";

interface HeaderProps extends React.ComponentProps<"header"> {}

function Header({ ...props }: HeaderProps) {
  return (
    <header {...props} className="flex items-center justify-between px-5">
      <img src={logoSvg} alt="logo" className="w-10 my-8" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá Raul</span>
        <LogOut className="w-10 my-8 cursor-pointer hover:opacity-75 transition ease-linear" />
      </div>
    </header>
  );
}

export default Header;

import logoutSvg from "../assets/logout.svg";
import logoSvg from "../../public/refund.svg";

interface HeaderProps extends React.ComponentProps<"header"> {}

function Header({ ...props }: HeaderProps) {
  return (
    <header {...props} className="w-screen flex items-center justify-between px-5">
      <img src={logoSvg} alt="logo" className="w-10 my-8" />
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá Raul</span>
        <img
          src={logoutSvg}
          alt="ícone de sair"
          className="w-10 my-8 cursor-pointer hover:opacity-75"
        />
      </div>
    </header>
  );
}

export default Header;

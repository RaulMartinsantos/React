import ConfirmSvg from "../assets/approved.svg";
import { Navigate, useLocation, Link } from "react-router";

function Confirm() {
  const location = useLocation();

  if (!location.state?.FromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className={`
      bg-gray-500 lg:w-[512px] p-10 gap-6
      rounded-xl flex flex-col items-center
      m-auto
    `}
    >
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>

      <img src={ConfirmSvg} alt="ícone de confirmação" className="w-28" />
      <p className="text-sm text-gray-200 text-center">
        Agora basta aguardar, sua solicitação será analisada e em breve o setor
        financeiro entrará em contato
      </p>

      <Link
        to="/"
        className={`
        w-full p-3 bg-green-100 text-center rounded-lg text-white
        hover:bg-green-200 transition ease-linear
      `}
      >
        Nova Solicitação
      </Link>
    </div>
  );
}

export default Confirm;

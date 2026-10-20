import { Link } from "react-router";

function NotFound() {
  return (
    <div
      className={`
      w-screen h-screen flex justify-center items-center
    bg-gray-400
    `}
    >
      <div
        className={`
          flex flex-col bg-gray-500 rounded-md items-center
          justify-center
          w-120 h-90 
        `}
      >
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Ops! Essa pagina não existe!
        </h1>
        <Link
          to="/"
          className={`
            font-semibold text-center text-green-100
            hover:text-green-200 transition ease-linear
          `}
        >
          Voltar para o inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

import { CircleDollarSign } from "lucide-react";
import Container from "./container";

function Header() {
  return (
    <header className="bg-blue max-w-full">
      <Container className="flex max-w-[1120px] justify-between m-auto items-center pt-8 pb-46">
        <CircleDollarSign className="bg-green-500 rounded-full text-white h-20 w-20" />
        <button
          type="button"
          onClick={() => alert("pinto!")} 
          className={`
            bg-blue-light rounded-sm text-[1rem] 
            border-0 p-8 h-8 text-background text-center flex items-center
            hover:brightness-90 transition-[filter] ease-linear
          `}
        >
          Nova Transação
        </button>
      </Container>
    </header>
  );
}

export default Header;

import Input from "../components/Input";
import Button from "../components/Button";

function SingIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input required legend="email" type="email" placeholder="seu@email.com" />

      <Input required legend="senha" type="password" placeholder="123456" />

      <Button>Entrar</Button>
    </form>
  );
}

export default SingIn;

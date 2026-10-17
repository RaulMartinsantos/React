import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.SubmitEvent) {
    console.log(email, password);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="email"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/singup"
        className={`
        text-sm font-semibold text-gray-100 
        mt-10 mb-4 text-center hover:text-green-800
        transition ease-linear
      `}
      >
        Criar conta
      </a>
    </form>
  );
}

export default SingIn;

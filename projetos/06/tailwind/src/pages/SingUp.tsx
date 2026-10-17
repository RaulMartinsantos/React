import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function SingUp() {
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("A senhas não coincidem");
    }
    console.log(name, email, password, confirmPassword);
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <Input
        required
        placeholder="seu nome"
        legend="nome"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="email"
        type="email"
        placeholder="seuemail@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="sua senha"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="confirme a senha"
        type="password"
        placeholder="confirme sua senha"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button type="submit">Cadastrar</Button>
      <a
        href="/"
        className={`
          text-sm font-semibold text-center
          text-gray-100 transition ease-linear 
          hover:text-green-800 mt-10 mb-4
        `}
      >
        Já tenho conta
      </a>
    </form>
  );
}

export default SingUp;

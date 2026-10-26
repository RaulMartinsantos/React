import { z, ZodError } from "zod";
import { useState } from "react";
import api from "../services/api"
import Input from "../components/Input";
import Button from "../components/Button";


const singUpSchema = z
  .object({
    name: z.string().trim().min(1, "Informe o nome"),
    email: z.email("informe um email válido"),
    password: z.string().min(6, "Senha deve ter 6 carácteres"),
    confirmPassword: z.string("confirme a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    try {
      setIsLoading(true);

      const data = singUpSchema.parse({
        name,
        email,
        password,
        confirmPassword,
      });
    } catch (err) {
      if (err instanceof ZodError) {
        return alert(err.issues[0].message);
      }
      alert("Não foi possível cadastrar");
    } finally {
      setIsLoading(false);
    }

    api.post("/users")
  }


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

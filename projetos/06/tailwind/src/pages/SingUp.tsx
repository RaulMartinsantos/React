import { z } from "zod";
import { AxiosError } from "axios";
import api from "../services/api";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const singUpSchema = z
  .object({
    name: z.string().trim().min(1, "Informe o nome"),
    email: z.email("informe um email válido"),
    password: z.string().min(6, "Senha deve ter 6 carácteres"),
    confirmPassword: z
      .string("confirme a senha")
      .trim()
      .min(1, "confirme a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type Form = z.infer<typeof singUpSchema>;

function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(singUpSchema),
  });

  const navigate = useNavigate();

  async function fetchSingUp(data: Form) {
    try {
      await api.post("/users", data);

      if (confirm("Cadastrado com sucesso deseja fazer login?")) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);

      if (err instanceof AxiosError) {
        return (
          err.response?.data?.message ??
          alert("Não foi possível realizar o cadastrado")
        );
      }

      alert("Não foi possível cadastrar");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(fetchSingUp)}
      className="flex w-full flex-col gap-4"
    >
      <Input
        {...register("name")}
        placeholder="seu nome"
        legend="nome"
        type="text"
        errorMessage={errors.name && errors.name.message}
      />

      <Input
        {...register("email")}
        legend="email"
        type="email"
        placeholder="seuemail@email.com"
        errorMessage={errors.email && errors.email.message}
      />

      <Input
        {...register("password")}
        legend="Senha"
        type="password"
        placeholder="sua senha"
        errorMessage={errors.password && errors.password.message}
      />

      <Input
        {...register("confirmPassword")}
        legend="confirme a senha"
        type="password"
        placeholder="confirme sua senha"
        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
      />

      <Button type="submit" isLoading={isSubmitting}>
        Cadastrar
      </Button>
      <Link
        to="/"
        className={`
          text-sm font-semibold text-center
          text-gray-100 transition ease-linear 
          hover:text-green-800 mt-10 mb-4
        `}
      >
        Já tenho conta
      </Link>
    </form>
  );
}

export default SingUp;

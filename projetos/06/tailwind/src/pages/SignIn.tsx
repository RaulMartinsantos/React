import { z } from "zod";
import { useState } from "react";
import api from "../services/api";
import { AxiosError } from "axios";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import Input from "../components/Input";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Info } from "lucide-react";

const singInSchema = z.object({
  email: z.email("email inválido"),
  password: z.string().trim().min(1, "Informe uma senha"),
});

type Form = z.infer<typeof singInSchema>;

function SingIn() {
  const [errMessage, setErrMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Form>({
    resolver: zodResolver(singInSchema),
  });

  const auth = useAuth();

  async function handleAction(data: Form) {
    try {
      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setErrMessage(err.response?.data.message);
      }

      return { message: "Não foi possível entrar" };
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleAction)}
      className="w-full flex flex-col gap-4"
    >
      <Input
        {...register("email")}
        legend="email"
        type="email"
        placeholder="seu@email.com"
        errorMessage={errors.email && errors.email.message}
      />

      <Input
        {...register("password")}
        legend="senha"
        type="password"
        placeholder="123456"
        errorMessage={errors.password && errors.password.message}
      />

      {errMessage !== "" && (
        <p className="text-red-900 p-2 flex gap-2 mt-4">
          <Info />
          {errMessage}
        </p>
      )}

      <Button type="submit" isLoading={isSubmitting}>
        Entrar
      </Button>

      <Link
        to="/singup"
        className={`
        text-sm font-semibold text-gray-100 
        mt-10 mb-4 text-center hover:text-green-800
        transition ease-linear
      `}
      >
        Criar conta
      </Link>
    </form>
  );
}

export default SingIn;

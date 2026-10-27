import { z, ZodError } from "zod";
import api from "../services/api";
import { AxiosError } from "axios";
import { Link } from "react-router";
import { useActionState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const singInSchema = z.object({
  email: z.email("email inválido"),
  password: z.string().trim().min(1, "Informe uma senha"),
});

function SingIn() {
  const [state, formAction, isLoading] = useActionState(handleAction, null);

  async function handleAction(_: any, formData: FormData) {
    try {
      const data = singInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      console.log(response.data);
    } catch (err) {
      if (err instanceof ZodError) {
        return { message: err.issues[0].message };
      }

      if (err instanceof AxiosError) {
        return { message: err.response?.data.message };
      }

      return { message: "Não foi possível entrar" };
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="email"
        name="email"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        legend="senha"
        name="password"
        type="password"
        placeholder="123456"
      />

      <p className="text=sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
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

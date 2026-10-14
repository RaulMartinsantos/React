import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

type Formdata = {
  name: string;
  date: string;
  event: string;
  description: string;
};

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Nome precisa ser maior que 2 caracteres")
    .required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
  event: yup.string().required("Evento é obrigatório"),
  description: yup
    .string()
    .min(2, "Descrição precisa ter mais de 2 caracteres")
    .required("Descrição é obrigatória"),
});

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Formdata>({
    defaultValues: {
      name: "",
      date: "",
      event: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  function onSubmit(data: Formdata) {
    console.log(data);
  }
  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        {errors.name?.message && (
          <span className="error">{errors.name.message}</span>
        )}

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />
        {errors.date?.message && (
          <span className="error">{errors.date?.message}</span>
        )}

        <Controller
          control={control}
          name="event"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="React">React</option>
              <option value="Node.js">Node.js</option>
              <option value="Javascript">Javascript</option>
              <option value="Typescript">Typescript</option>
            </select>
          )}
        />
        {errors.event?.message && (
          <span className="error">{errors.event?.message}</span>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />
        {errors.description?.message && (
          <span className="error">{errors.description?.message}</span>
        )}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

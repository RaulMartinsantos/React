import React from "react";
import useUser from "../hooks/use-user";
import type { User } from "../models/user";

function UserNewForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { createUser, userRequestStatus } = useUser();

  async function handleSubmit(e: React.SubmitEvent) {
    if (!formRef.current) {
      return;
    }
    e.preventDefault();

    const data = new FormData(formRef.current);

    const payload = {
      id: data.get("id"),
      name: data.get("name"),
    };

    await createUser(payload as User);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input placeholder="Username" name="id" required />
      </div>
      <div>
        <input placeholder="Nome" name="name" required />
      </div>
      <div>
        <button type="submit">
          {userRequestStatus === "saving" ? "criando..." : "Criar usuário"}
        </button>
      </div>
    </form>
  );
}

export default UserNewForm;

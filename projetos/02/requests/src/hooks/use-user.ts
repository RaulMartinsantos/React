import React from "react";
import { api, fetcher } from "../helpers/api";
import type { User } from "../models/user";

function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    "Idle" | "loading" | "saving"
  >("Idle");

  const getUser = React.useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");
      const data = await fetcher(`/users/${username}`);
      setUser(data);
    } catch (err) {
      console.log(err);
      alert("Erro ao buscar usuário");
    } finally {
      setRequestStatus("Idle");
    }
  }, []);

  async function createUser(payload: User) {
    try {
      setRequestStatus("saving");
      await api("/users", {
        method: "POST",
        headers: {
          "Content-type": "application.json",
        },
        body: JSON.stringify(payload),
      });
      alert("Usuário criado com sucesso");
    } catch (err) {
      console.log(err);
      alert("Erro ao criar usuário");
    } finally {
      setRequestStatus("Idle");
    }
  }

  return {
    user,
    userRequestStatus: requestStatus,
    getUser,
    createUser,
  };
}

export default useUser;

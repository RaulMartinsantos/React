import { use } from "react";
import AuthContext from "../context/AuthContext";

function useAuth() {
  const context = use(AuthContext);

  return context;
}

export default useAuth;

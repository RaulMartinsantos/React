import AuthRoutes from "./AuthRoutes";
import useAuth from "../hooks/useAuth";
import ManagerRoutes from "./MangerRoutes";
import { BrowserRouter } from "react-router";
import EmployeeRoutes from "./EmployeeRoutes";
import Skeleton from "../components/Skeleton";

const isLoading = false;

const session = {
  user: {
    role: "",
  },
};

function Routes() {
  const context = useAuth();

  console.log(context);

  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Skeleton />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default Routes;

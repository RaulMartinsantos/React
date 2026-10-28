import AuthRoutes from "./AuthRoutes";
import useAuth from "../hooks/useAuth";
import ManagerRoutes from "./MangerRoutes";
import { BrowserRouter } from "react-router";
import EmployeeRoutes from "./EmployeeRoutes";
import Skeleton from "../components/Skeleton";

function Routes() {
  const { session, isLoading } = useAuth();

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

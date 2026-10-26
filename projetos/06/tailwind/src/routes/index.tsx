import AuthRoutes from "./AuthRoutes";
import NotFound from "../pages/NotFound";
import ManagerRoutes from "./MangerRoutes";
import { BrowserRouter } from "react-router";
import Skeleton from "../components/Skeleton";
import EmployeeRoutes from "./EmployeeRoutes";

const isLoading = false;

const session = {
  user: {
    role: "employee",
  },
};

function Routes() {
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

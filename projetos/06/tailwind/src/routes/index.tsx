import AuthRoutes from "./AuthRoutes";
import NotFound from "../pages/NotFound";
import ManagerRoutes from "./MangerRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import { BrowserRouter } from "react-router";

function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}

export default Routes;

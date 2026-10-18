import AuthRoutes from "./auth-routes";
import { BrowserRouter } from "react-router";
import EmployeeRoutes from "../pages/EmployeeRoutes";

function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}

export default Routes;

import AuthRoutes from "./auth-routes";
import { BrowserRouter } from "react-router";

function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default Routes;

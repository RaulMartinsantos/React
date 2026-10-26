import SingUp from "../pages/SingUp";
import SingIn from "../pages/SignIn";
import { Route } from "react-router";
import { Routes } from "react-router";
import AuthLayout from "../components/AuthLayout";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SingUp />} />
        <Route path="/singin" element={<SingIn />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;

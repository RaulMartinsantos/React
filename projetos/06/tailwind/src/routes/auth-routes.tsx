import SingIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";
import { Routes, Route } from "react-router";
import AuthLayout from "../components/AuthLayout";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
      </Route>
    </Routes>
  );
}

export default AuthRoutes;

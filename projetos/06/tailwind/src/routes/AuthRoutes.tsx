import SingUp from "../pages/SingUp";
import SingIn from "../pages/SignIn";
import { Route } from "react-router";
import AuthLayout from "../components/AuthLayout";
import type { ReactElement } from "react";

const AuthRoutes: ReactElement[] = [
  <Route path="/" element={<AuthLayout />}>
    <Route index element={<SingIn />} />
    <Route path="/singup" element={<SingUp />} />
  </Route>,
];

export default AuthRoutes;

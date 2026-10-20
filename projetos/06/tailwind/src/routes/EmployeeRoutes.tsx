import Refund from "../pages/Refund";
import { Route, Routes } from "react-router";
import Confirm from "../pages/Confirm";
import AppLayout from "../components/AppLayout";
import NotFound from "../pages/NotFound";

function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EmployeeRoutes;

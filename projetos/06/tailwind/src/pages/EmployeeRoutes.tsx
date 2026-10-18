import { Routes, Route } from "react-router";

import Refund from "./Refund";
import NotFound from "./NotFound";
import AppLayout from "../components/AppLayout";

function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Refund />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default EmployeeRoutes;

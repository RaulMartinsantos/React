import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import { Route, Routes } from "react-router";
import AppLayout from "../components/AppLayout";

function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ManagerRoutes;

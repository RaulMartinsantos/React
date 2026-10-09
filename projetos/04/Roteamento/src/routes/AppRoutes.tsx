import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Products from "../pages/Products";
import { Routes, Route } from "react-router";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/teste" element={<App />} />
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

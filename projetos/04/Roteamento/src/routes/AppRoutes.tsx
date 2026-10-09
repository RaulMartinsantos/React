import App from "../App";
import Home from "../pages/Home";
import Details from "../pages/details";
import Products from "../pages/Products";
import NotFound from "../pages/NotFound";
import Layout from "../components/layout";
import { Routes, Route } from "react-router";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

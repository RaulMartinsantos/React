import PageHome from "./pages/page-home";
import LayoutMain from "./pages/layout-main";
import PageComponents from "./pages/pages-components";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/components" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

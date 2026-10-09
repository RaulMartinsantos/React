import { Outlet } from "react-router";
import "./styles.css";

function Layout() {
  return (
    <div>
      <header className="user">
        <p>Olá Layouts</p>
      </header>

      <Outlet />

      <footer>
        <span className="copyright">Testando Layouts</span>
      </footer>
    </div>
  );
}

export default Layout;

import { Outlet } from "react-router";
import MainHeader from "../components/main-header";

function LayoutMain() {
  return (
    <>
      <MainHeader className="mt-9" />
      <Outlet />
    </>
  );
}

export default LayoutMain;

import Header from "./Header";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div
      className={`
      h-screen w-screen px-5 bg-gray-400 flex flex-col items-center text-gray-100
    `}
    >
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="main-h-screen flex flex-col">
      <Outlet />
    </div>
  );
}

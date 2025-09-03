import { Outlet } from "react-router-dom";
import { AppHeader } from "@/features/header";
import { CONFIG } from "@/shared/model/config";

export function App() {
  console.log(CONFIG.API_BASE_URL)
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
}

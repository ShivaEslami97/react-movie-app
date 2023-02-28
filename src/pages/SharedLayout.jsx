import { Outlet } from "react-router-dom";
import SidebarNav from "../components/SidebarNav/SidebarNav";

const SharedLayout = () => {
  return (
    <>
      <SidebarNav />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};
export default SharedLayout;

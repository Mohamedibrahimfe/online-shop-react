import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="container ">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "../components/Home/footer/Footer";
const Layout = () => {
  return (
    <div className=" ">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

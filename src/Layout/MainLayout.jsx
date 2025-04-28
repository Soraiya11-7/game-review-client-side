import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <div className="container w-full mx-auto dark:bg-gray-950">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-401px)]">
            <Outlet />
          </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
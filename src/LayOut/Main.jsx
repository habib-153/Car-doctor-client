import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
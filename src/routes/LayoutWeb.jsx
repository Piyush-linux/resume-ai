import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutWeb() {
    return (
        <div className="">

            <Navbar />
            <Outlet />
            {/* <Footer /> */}


        </div>
    )
}
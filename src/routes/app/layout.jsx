import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return(
        <>
        <div className="">
            {/* Navbar */}
            <Navbar/>
            {/* content */}
            <div className="mx-auto max-w-screen-xl">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
    )
}
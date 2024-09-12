import Navbar from "@/components/home/Navbar";
import { Outlet } from "react-router-dom";

export default function LayoutWeb() {
    return (
        <div className="layout h-screen">
            <Navbar />
            <Outlet />
        </div>
    )
}
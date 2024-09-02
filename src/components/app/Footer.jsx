import { SquareMousePointer } from "lucide-react";

export default function Footer() {
    return (
        <div className="mx-auto max-w-7xl px-6 flex justify-center items-center py-10 bg-gray-100 m-6">
            <div className="flex items-center space-x-3">
                <SquareMousePointer />
                <span className="font-extrabold text-2xl">Seekout</span>
            </div>
        </div>
    )
}
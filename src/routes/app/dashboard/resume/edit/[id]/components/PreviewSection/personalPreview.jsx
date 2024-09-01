import { Mail, MapPin, Phone } from "lucide-react";
export default function PersonalPreview({resumeInfo}) {
    return (
        <div className="w-full">
            <div className="text-2xl font-bold">{resumeInfo.name}</div>
            <div className="text-lg text-gray-600 tracking-wider font-medium">Web Developer</div>
            <div className="w-full flex justify-between mt-1 text-sm">
                <div className="flex items-center space-x-2">
                    <Phone size={18} /> <span>9326092230</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail size={18} /> <span>piyush@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin size={18} /> <span>Mumbai, India</span>
                </div>
            </div>
        </div>
    )
}
import { Mail, MapPin, Phone } from "lucide-react";
export default function PersonalPreview({resumeInfo}) {
    return (
        <div className="w-full">
            <div className="text-2xl font-bold text-center">{resumeInfo?.name}</div>
            <div className="text-lg text-gray-600 tracking-wider font-medium text-center capitalize">{resumeInfo?.position}</div>
            <div className="mx-auto flex w-fit mt-1 text-sm space-x-6">
                <div className="flex items-center space-x-2">
                    <Phone size={18} /> <span>{resumeInfo?.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Mail size={18} /> <span>{resumeInfo?.mail}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MapPin size={18} /> <span>{resumeInfo?.location}</span>
                </div>
            </div>
        </div>
    )
}
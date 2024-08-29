import { Download, Share2 } from "lucide-react";
import { Button } from "../ui/button";

export default function ResumeCard(props) {
    return (
        <div className="w-auto h-80 mb-10 p-6">
            <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                <div className={`h-48 ${props.color}`}>
                    
                </div>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl my-6 font-semibold tracking-tight text-slate-900">
                            Nike Air MX Super 5000
                        </h5>
                    </a>
                    <div className="flex items-center justify-between space-x-2">
                        
                        <Button className="w-full" variant="outline">Edit</Button>
                        <Button className="w-auto"><Share2 strokeWidth={1.3} size={20} /></Button>
                        <Button className="w-auto"> <Download strokeWidth={1.3} size={20} /> </Button>

                    </div>
                </div>
            </div>

        </div>
    )
}
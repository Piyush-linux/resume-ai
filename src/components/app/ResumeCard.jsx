import { Download, Notebook, Share2, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import API from "./../../../service/GlobalApi";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";


export default function ResumeCard(props) {

    const navigate = useNavigate();
    let [openDialog, setOpenDialog] = useState(false);


    let handle_remove_resume = async () => {
        try {
            let data = await API.RemoveSingleResume(props.resumeid);
            console.log(data);
            navigate(0);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-auto h-80 mb-10">

            <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">

                <div className={`h-48 ${props.color} flex justify-center items-center text-white`}>
                    <Notebook size={30} />
                </div>
                <div className="mt-4 px-5 pb-5">
                    <a href="#">
                        <h5 className="text-xl my-6 font-semibold tracking-tight text-slate-900">
                            {props.title}
                        </h5>
                    </a>
                    <div className="flex items-center justify-between space-x-2">

                        <Button className="w-full" variant="outline" onClick={() => navigate(`/resume/edit/${props.resumeid}`)}>Edit</Button>
                        <Button className="w-auto" variant="primary" onClick={() => setOpenDialog(true)}> <Trash strokeWidth={1.5} size={20} /> </Button>
                        <Button className="w-auto" onClick={() => navigate(`/resume/view/${props.resumeid}`)} > <Download strokeWidth={1.5} size={20} /> </Button>

                    </div>
                </div>
            </div>
            {/* Del Confirm */}
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <div className="mb-3">
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </div>
                            <div className="space-x-4">
                                <Button onClick={() => setOpenDialog(true)} variant="outline">Cancel</Button>
                                <Button onClick={() => handle_remove_resume()}>Confirm</Button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>


        </div>
    )
}
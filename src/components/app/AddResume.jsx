import { useUser } from '@clerk/clerk-react';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { LoaderCircle, SquarePlus } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import API from './../../../service/GlobalApi';




export default function AddResume() {

    let { user } = useUser();
    let [openDialog, setDialog] = useState(false);
    let [ResumeTitle, setResumeTitle] = useState('');
    let [loading,setLoading] = useState(false);

    // get data: (title,id - uuid, userInfo from clerk ) > hit API
    let GenerateResume = async () => {
        setLoading(true)
        let id = uuidv4();
        console.log(id, ResumeTitle);
        let resume = {
            data: {
                title: ResumeTitle,
                resumeid: id,
                user_email: user?.primaryEmailAddress?.emailAddress,
                user_name: user?.fullName
            }
        }

        try {
            console.log(resume)
            let { data } = await API.CreateResume(resume)
            console.log(data.data)
            setLoading(false);
            setDialog(false);

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className="w-full h-full     cursor-pointer border-2 rounded-lg border-dashed p-1">
            <div onClick={() => setDialog(true)} className="bg-slate-300 w-full h-full flex justify-center items-center rounded-lg transition-all hover:scale-105 hover:shadow-xl">
                <button className="text-white"><SquarePlus size={42} /></button>
            </div>
            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Wanna Create New Resume ?</DialogTitle>
                        <DialogDescription>
                            <span className="text-sm text-gray-500 leading-relaxed">Insert the title for your resume</span>
                            <span className="w-full flex justify-between mt-3">
                                <Input placeholder="Tech Resume..." variant="destructive" onChange={(e) => setResumeTitle(e.target.value)} value={ResumeTitle} />
                            </span>
                        </DialogDescription>
                        <DialogFooter>
                            <span className="w-full flex justify-end gap-5 pt-6">
                                <DialogClose asChild>
                                    <Button variant="outline" onClick={() => setDialog(false)}>Cancel</Button>
                                </DialogClose>
                                <Button variant="primary" onClick={() => GenerateResume()} disabled={!ResumeTitle || loading}>
                                    
                                    {loading? <LoaderCircle className='animate-spin' /> : "Create" }

                                </Button>
                            </span>
                        </DialogFooter>

                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}
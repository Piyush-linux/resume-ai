import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumeContext } from "@/context/ResumeInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "./../../../../../../../../../service/GlobalApi";
import { toast } from 'react-toastify'
import { Loader2 } from "lucide-react";

export default function PersonalForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext)
    let { id } = useParams();
    let [formData, setFormData] = useState();
    let [loading, setLoading] = useState(false);

    let handleInput = (e) => {
        let { name, value } = e.target;
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            [name]: value
        })
        )
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // Update DB
    let formSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        // console.log(formData)
        try {
            let data = await API.UpdateSingleResume(id, { data: formData });
            // console.log(data);
            toast("Data Saved !");
        } catch (error) {
            console.log("--- Error ---", error)
        }
        setLoading(false)
    }

    return (
        <div className="w-full">
            <div className="content mb-3">
                <div className="text-xl">Personal</div>
                <div className="text-sm">Add your personal details.</div>
            </div>

            <form className="w-full space-y-3" onSubmit={formSubmit}>
                <Input type="text" name="name" defaultValue={resumeInfo?.name} placeholder="Name" onChange={handleInput} />
                <Input type="text" name="position" defaultValue={resumeInfo?.position} placeholder="Job Position" onChange={handleInput} />
                <Input type="text" name="phone" defaultValue={resumeInfo?.phone} placeholder="Phone" onChange={handleInput} />
                <Input type="text" name="mail" defaultValue={resumeInfo?.mail} placeholder="Email" onChange={handleInput} />
                <Input type="text" name="location" defaultValue={resumeInfo?.location} placeholder="Location" onChange={handleInput} />
                <div className="w-full mx-auto mt-6">
                    <Button type="submit" variant="link" className="w-full">{loading ? <Loader2 className="animate-spin" /> : "Save"}</Button>
                </div>
            </form>
        </div>
    )
}
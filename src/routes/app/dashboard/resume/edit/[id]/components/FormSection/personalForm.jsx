import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumeContext } from "@/context/ResumeInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import API from "./../../../../../../../../../service/GlobalApi";


export default function PersonalForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext)
    let { id } = useParams();
    let [formData, setFormData] = useState();

    let handleInput = (e) => {
        let { name, value } = e.target;
        console.log(name, value)
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            [name]: value
        })
        )
        setFormData(formData =>({
            ...formData,
            [name]:value 
        }))
    }

    // Update DB
    let formSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            let data = await API.UpdateSingleResume(id, {data:formData});

            console.log(data);
        } catch (error) {
            console.log("--- Error ---", error)
        }
    }

    return (
        <div className="w-full">
            <div className="text-lg mb-3">
                Personal
            </div>
            <form className="w-full space-y-3" onSubmit={formSubmit}>
                <Input type="text" name="name" defaultValue={resumeInfo.name} placeholder="Name" onChange={handleInput} />
                <Input type="text" name="position" defaultValue={resumeInfo.position} placeholder="Job Position" onChange={handleInput} />
                <Input type="text" name="phone" defaultValue={resumeInfo.phone} placeholder="Phone" onChange={handleInput} />
                <Input type="text" name="mail" defaultValue={resumeInfo.mail} placeholder="Email" onChange={handleInput} />
                <Input type="text" name="location" defaultValue={resumeInfo.location} placeholder="Location" onChange={handleInput} />
                <div className="w-full mx-auto mt-6">
                    <Button type="submit" variant="link" className="w-full">Save</Button>
                </div>
            </form>
        </div>
    )
}
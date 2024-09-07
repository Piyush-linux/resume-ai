import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./../../../../../../../../../service/GlobalApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, SquarePlus, SquareX } from "lucide-react";

export default function ExperienceForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext)
    let { id } = useParams();
    let [loading, setLoading] = useState(false);
    let [expList, setExpList] = useState([
        {
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            summary:""
        }
    ]);

    let handleInput = (e) => {
        let { name, value } = e.target;
        console.log(name, value)
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            [name]: value
        })
        )
        // setFormData(formData =>({
        //     ...formData,
        //     [name]:value 
        // }))
    }


    let handleRemoveExp = () => {
        console.log("remove---");
        let entries = expList;
        entries.slice(0,-1);
        setExpList(entries);
    }
    
    let handleAddExp = () => {
        setExpList([...expList,{
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            summary:""
        }])
    }

    let handleSave = async () => {
        console.log("Hello !")
        setLoading(true)
        try {
            let data = await API.UpdateSingleResume(id, {data:expList});
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <div className="w-full">
            <div className="text-lg mb-3">
                Experinence
            </div>
            <div className="w-full space-y-6 overflow-y-scroll h-[400px]">
                {expList.length > 0 && expList.map((itm,index) => {
                    return (
                        <form className="w-full border-2 space-y-3 border-gray-600 p-6 rounded-lg">
                            <div className="">No. {index+1} </div>
                            <Input name="position" placeholder="Position" />
                            <Input name="company" placeholder="Company" />
                            <Input name="location" placeholder="location" />
                            <Input name-="startDate" placeholder="startDate" />
                            <Input name="endDate" placeholder="endDate" />
                            <Textarea name="summary" placeholder="compnay summary" />
                        </form>
                    )
                })}

            </div>
            <div className="w-full grid grid-cols-2 mt-6 gap-2">
                <Button type="button" variant="outline" onClick={() => handleAddExp()} className="col-span-1 gap-2 text-md">  <SquarePlus /> Add Experience  </Button>
                <Button type="button" variant="outline" onClick={() => handleRemoveExp()} className="col-span-1 gap-2 text-md">  <SquareX /> Remove  </Button>
                <Button type="submit" variant="link" onClick={() => handleSave()} className="col-span-2" > {loading ? <Loader2 className="animate-spin" /> : "Save"}  </Button>
            </div>
        </div>
    )
}
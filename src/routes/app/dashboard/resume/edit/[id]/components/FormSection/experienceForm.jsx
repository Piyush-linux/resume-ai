import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, SquarePlus } from "lucide-react";
import { useState } from "react";

export default function ExperienceForm() {

    let [loading, setLoading] = useState(false);
    let [expList, setExpList] = useState([
        {
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: ""
        }
    ]);

    let handleAddExp = () => {
        setExpList([...expList,{
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: ""
        }])
    }

    let handleSave = () => {
        console.log("Hello !")
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

                            <Input placeholder="Position" />
                            <Input placeholder="Company" />
                            <Input placeholder="location" />
                            <Input placeholder="startDate" />
                            <Input placeholder="endDate" />
                            <Textarea placeholder="compnay summary" />
                        </form>
                    )
                })}

            </div>
            <div className="w-full flex justify-between mt-6">
                <Button type="button" variant="outline" onClick={() => handleAddExp()} className="gap-2 text-md"> <SquarePlus /> Add Experience  </Button>
                <Button type="submit" variant="link" onClick={() => handleSave()}> {loading ? <Loader2 className="animate-spin" /> : "Save"}  </Button>
            </div>
        </div>
    )
}
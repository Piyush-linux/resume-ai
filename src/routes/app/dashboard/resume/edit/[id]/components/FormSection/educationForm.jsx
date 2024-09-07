import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, SquarePlus, SquareX } from "lucide-react";
import { useState } from "react";

export default function EducationForm() {

    let [loading, setLoading] = useState(false);
    let [eduList, setEduList] = useState([
        {
            name: "",
            date: ""
        }
    ]);

    let handleRemoveEdu = () => {
        let entries = eduList.slice(0, -1);
        setEduList(entries);
    }

    let handleAddEdu = () => {
        setEduList([...eduList, {
            name: "",
            date: ""
        }])
    }

    let handleSave = () => {
        console.log("Hello !")
    }


    return (
        <div className="w-full">
            <div className="text-lg mb-3">
                Education
            </div>
            <div className="w-full space-y-6 overflow-y-scroll h-[250px]">
                {eduList.length > 0 && eduList.map((itm, index) => {
                    return (
                        <form className="w-full border-2 space-y-3 border-gray-600 p-6 rounded-lg">
                            <div className="">No. {index + 1} </div>
                            <Input placeholder="Name..." />
                            <Input placeholder="Marks" />
                            <Input placeholder="Date" />
                        </form>
                    )
                })}
            </div>
            <div className="w-full grid grid-cols-2 mt-6 gap-2">
                <Button type="button" variant="outline" onClick={() => handleAddEdu()} className="col-span-1 gap-2 text-md">  <SquarePlus /> Add Eduucation </Button>
                <Button type="button" variant="outline" onClick={() => handleRemoveEdu()} className="col-span-1 gap-2 text-md">  <SquareX /> Remove </Button>
                <Button type="submit" variant="link" onClick={() => handleSave()} className="col-span-2"> {loading ? <Loader2 className="animate-spin" /> : "Save"}  </Button>

            </div>
        </div>
    )
}
import { ResumeContext } from "@/context/ResumeInfo";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "./../../../../../../../../../service/GlobalApi";
import AI from "./../../../../../../../../../service/AiModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Atom, Loader2, SquarePlus, SquareX } from "lucide-react";

export default function ExperienceForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext)
    let { id } = useParams();
    let [loading, setLoading] = useState(false);
    let [expList, setExpList] = useState([]);

    let handleInput = (e, index) => {
        const newEntries = expList.slice();
        const { name, value } = e.target;
        newEntries[index][name] = value;
        setExpList(newEntries);
    }

    let handleAI = async (index) => {
        setLoading(true)
        const prompt = "Generate summary for an resume experience for {position} in organization {org} of 3 to 4 lines, Schema as {'summary':'content...'}";
        try {
            const newEntries = expList.slice();
            let newPrompt = prompt.replace("{position}", newEntries[index]?.position).replace("{org}", newEntries[index]?.company);
            const { response } = await AI.sendMessage(newPrompt);
            let { summary } = JSON.parse(response.text());
            //--- Set Summary
            newEntries[index]['summary'] = summary;
            setExpList(newEntries);
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    let handleRemoveExp = () => {
        let entries = expList.slice(0,-1);
        setExpList(entries);
        // console.log("remove",expList)
    }

    let handleAddExp = () => {
        setExpList([...expList, {
            position: "",
            company: "",
            location: "",
            startDate: "",
            endDate: "",
            summary: ""
        }])
    }

    let handleSave = async () => {
        setLoading(true);
        try {
            let data = await API.UpdateSingleResume(id, { data: { experience: expList } });
            console.log(data);
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(() => {
        resumeInfo?.experience.length > 0 && setExpList(resumeInfo?.experience)
    }, [])

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            ['experience']: expList
        });
    }, [expList]);

    return (
        <div className="w-full">
            <div className="content mb-3">
                <div className="text-xl"> Experinence</div>
                <div className="text-sm">Add your experinecial details.</div>
            </div>
            <div className="w-full space-y-6 overflow-y-scroll h-[440px]">
                {expList.length > 0 && (!loading) && expList.map((itm, index) => {
                    return (
                        <div key={index} className="w-full border-2 space-y-3 border-gray-600 p-6 rounded-lg">
                            <div className="">No. {index + 1} </div>
                            <Input name="position" placeholder="Position" defaultValue={itm.position} onChange={(e) => handleInput(e, index)} />
                            <Input name="company" placeholder="Company" defaultValue={itm.company} onChange={(e) => handleInput(e, index)} />
                            <Input name="location" placeholder="location" defaultValue={itm.location} onChange={(e) => handleInput(e, index)} />
                            <Input type="date" name-="startDate" placeholder="startDate" defaultValue={itm.startDate} onChange={(e) => handleInput(e, index)} />
                            <Input type="date" name="endDate" placeholder="endDate" defaultValue={itm.endDate} onChange={(e) => handleInput(e, index)} />
                            <Textarea name="summary" placeholder="compnay summary" defaultValue={itm.summary} onChange={(e) => handleInput(e, index)} />
                            <Button type="button" className="w-full gap-2" onClick={() => handleAI(index)}> <Atom /> Generate Summary</Button>
                        </div>
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
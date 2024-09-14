import { useContext, useEffect, useState } from "react";
import { ResumeContext } from "@/context/ResumeInfo";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Atom, Loader2, SquarePlus, SquareX } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import AI from "./../../../../../../../../../service/AiModel";
import API from "./../../../../../../../../../service/GlobalApi";
import { toast } from "react-toastify";

export default function EducationForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext)
    let { id } = useParams();
    let [loading, setLoading] = useState(false);
    let [eduList, setEduList] = useState([{
        university: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        summary: ""
    }]);


    let handleInput = (e, index) => {
        const newEntries = eduList.slice();
        const { name, value } = e.target;
        newEntries[index][name] = value;
        setEduList(newEntries);
        console.log(eduList)
    }

    let handleAI = async (index) => {
        setLoading(true)
        const prompt = "Generate summary for an resume education for {degree} of 3 to 4 lines, schema as : {'summary':'content...'}";
        try {
            //--- Prompt
            let entries = eduList.slice();
            let newPrompt = prompt.replace("{degree}", entries[index]?.major)
            const { response } = await AI.sendMessage(newPrompt);
            let { summary } = JSON.parse(response.text())

            //--- Set Summary
            entries[index]['summary'] = summary;
            setEduList(entries);

        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }

    let handleRemoveEdu = () => {
        let entries = eduList.slice(0, -1);
        setEduList(entries);
    }

    let handleAddEdu = () => {
        setEduList([...eduList,
        {
            university: "",
            degree: "",
            major: "",
            startDate: "",
            endDate: "",
            summary: ""
        }
        ])
    }

    let handleSave = async () => {
        setLoading(true);
        try {
            let data = await API.UpdateSingleResume(id, { data: { education: eduList } });
            console.log(data);
            toast("Data Saved !");
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }


    useEffect(() => {
        resumeInfo?.education.length > 0 && setEduList(resumeInfo?.education)
    }, [])
    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            education: eduList
        });
    }, [eduList]);


    return (
        <div className="w-full">
            <div className="content mb-3">
                <div className="text-xl">Education</div>
                <div className="text-sm">Add your educational details.</div>
            </div>
            <div className="w-full space-y-6 overflow-y-scroll h-[400px]">
                {eduList.length > 0 && (!loading) && eduList?.map((itm, index) => {
                    return (
                        <div className="w-full border-2 space-y-3 border-gray-600 p-6 rounded-lg" key={index}>
                            <div className="">No. {index + 1} </div>
                            <Input name="university" placeholder="university" onChange={(e) => handleInput(e, index)} defaultValue={itm.university} />
                            <Input name="degree" placeholder="degree" onChange={(e) => handleInput(e, index)} defaultValue={itm.degree} />
                            <Input name="major" placeholder="major" onChange={(e) => handleInput(e, index)} defaultValue={itm.major} />
                            <Input type="date" name="startDate" placeholder="startDate" onChange={(e) => handleInput(e, index)} defaultValue={itm.startDate} />
                            <Input type="date" name="endDate" placeholder="endDate" onChange={(e) => handleInput(e, index)} defaultValue={itm.endDate} />
                            <Textarea name="summary" placeholder="summary" defaultValue={itm.summary} onChange={(e) => handleInput(e, index)} />
                            <Button className="w-full gap-2" onClick={() => handleAI(index)}> <Atom /> Generate Summary</Button>
                        </div>
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
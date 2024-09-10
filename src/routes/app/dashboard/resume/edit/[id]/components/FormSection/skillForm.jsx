import { ResumeContext } from "@/context/ResumeInfo";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Atom } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function SkillForm() {
    let { id } = useParams();
    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    let [loading, setLoading] = useState(false);
    let [skills, setSkills] = useState(['html', 'css', 'js'])
    let [newSkill, SetNewSkill] = useState('');
    let [aiList, setAiList] = useState([]);

    let handleInput = (e) => {
        let NewSkill = e.target.value;
        SetNewSkill(NewSkill);
    }
    let handleAddSkill = () => {
        setSkills([...skills, newSkill]);
        SetNewSkill('');
        console.log(newSkill);
    }

    let handleAi = () => {
        console.log("Handle...");
    }

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-2">
                <div className="content mb-1">
                    <div className="text-xl">Skill</div>
                    <div className="text-sm">Add your list of skills.</div>
                </div>
                {/* <Button variant="outline" className="gap-2" onClick={() => handleAi()}><Atom />Gen AI</Button> */}
            </div>
            <div className="w-full grid grid-cols-4 mb-3 gap-4">
                <Input placeholder="skills..." className="col-span-3" onChange={(e) => handleInput(e)} defaultValue={newSkill} />
                <Button className="col-span-1" variant="outline" onClick={() => handleAddSkill()}> Add </Button>
            </div>
            <div className="tags flex flex-wrap space-x-3">
                {
                    skills.length > 0 && skills.map((x, index) => {
                        return (
                            <Badge key={index}> {x} </Badge>
                        )
                    })
                }

            </div>
        </div>

    )
}
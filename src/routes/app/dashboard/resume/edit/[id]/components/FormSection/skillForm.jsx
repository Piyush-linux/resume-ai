import { ResumeContext } from "@/context/ResumeInfo";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import AI from "./../../../../../../../../../service/AiModel";
import API from "./../../../../../../../../../service/GlobalApi";
import { Button } from "@/components/ui/button";
import { Loader2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from 'react-toastify'

export default function SkillForm() {
    let { id } = useParams();
    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    let [loading, setLoading] = useState(false);
    let [skills, setSkills] = useState([])
    let [newSkill, SetNewSkill] = useState('');
    let [aiList, setAiList] = useState([]);

    let handleInput = (e) => {
        let NewSkill = e.target.value;
        SetNewSkill(NewSkill);
        
    }
    
    let handleAddSkill = () => {
        setSkills([...skills, newSkill]);
        SetNewSkill(null);
        console.log(newSkill);
    }
    
    let handleSkillRemove = (index) => {
        let entries = skills.slice();
        entries = entries.filter(function(item,i) {
            return i !== index
        })
        setSkills(entries);
    }

    let handleAi = () => {
        console.log("Handle...");
    }

    let handleSave = async () => {
        setLoading(true);
        try {
            let data = await API.UpdateSingleResume(id, { data: { skills: skills } });
            console.log(data);
            toast("Data Saved !");
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }

    useEffect(()=>{
        resumeInfo?.skills.length > 0 && setSkills(resumeInfo?.skills)
    },[])

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            skills: skills
        });
    }, [skills]);

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-2">
                <div className="content mb-1">
                    <div className="text-xl">Skill</div>
                    <div className="text-sm">Add your list of skills.</div>
                </div>
                {/* <Button variant="outline" className="gap-2" onClick={() => handleAi()}><Atom />Gen AI</Button> */}
            </div>
            <div className="w-full grid grid-cols-4 mb-4 gap-4">
                <Input placeholder="skills..." className="col-span-3" onChange={(e) => handleInput(e)} defaultValue={newSkill} />
                <Button className="col-span-1" variant="outline" onClick={() => handleAddSkill()}> Add </Button>
                <Button type="submit" variant="link" onClick={() => handleSave()} className="col-span-4"> {loading ? <Loader2 className="animate-spin" /> : "Save"}  </Button>
            </div>
            <div className="tags flex flex-wrap gap-2">
                {
                    skills.length > 0 && skills.map((x, index) => {
                        return (
                            <Badge key={index} className="gap-2" onClick={()=> handleSkillRemove(index)}> {x} <X /> </Badge>
                        )
                    })
                }

            </div>
        </div>

    )
}
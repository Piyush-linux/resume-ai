import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ResumeContext } from "@/context/ResumeInfo";
import { Button } from "@/components/ui/button";
import PersonalForm from "./personalForm";
import SummaryForm from "./summaryForm";
import ExperienceForm from "./experienceForm";
import EducationForm from "./educationForm";
import SkillForm from "./skillForm";
import { Download, House } from "lucide-react";
import {
    Menubar,
    MenubarContent,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarTrigger,
} from "@/components/ui/menubar"



export default function FormSection() {

    let { id } = useParams();
    let [formIndex, setFormIndex] = useState(1);
    let navigate = useNavigate();
    let [theme,setTheme] = useState('');
    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);


    // popup(confirm > save)
        let handleTheme = ()=>{
            console.log(theme)
        }

        useEffect(()=>{
            resumeInfo?.theme?.length > 0 && setTheme(resumeInfo?.theme);
        },[])
        useEffect(()=>{
            setResumeInfo({
                ...resumeInfo,
                theme: theme
            });
        },[theme])

    return (
        <div className="p-6">
            <div className="mb-10 w-full flex justify-between space-x-2">
                <div className="flex space-x-3">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Theme</MenubarTrigger>
                            <MenubarContent>
                                <MenubarRadioGroup value={resumeInfo?.theme}>
                                    <MenubarRadioItem value="rose" onClick={()=>setTheme('rose')}>rose</MenubarRadioItem>
                                    <MenubarRadioItem value="emerald" onClick={()=>setTheme('emerald')}>emerald</MenubarRadioItem>
                                    <MenubarRadioItem value="sky" onClick={()=>setTheme('sky')}>sky</MenubarRadioItem>
                                </MenubarRadioGroup>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                    <Link to="/dashboard" > <Button variant="outline"><House /></Button> </Link>
                    <Button variant="outline" onClick={() => navigate(`/resume/view/${id}`)}><Download /></Button>
                    {/* <Button variant="outline" onClick={()=>navigate(`/resume/view/${id}`)}><Download /></Button> DEL */}
                </div>
                <div className="space-x-2">
                    <Button onClick={() => setFormIndex(formIndex - 1)} disabled={formIndex == 1} >Back</Button>
                    <Button onClick={() => setFormIndex(formIndex + 1)} disabled={formIndex == 5}>Next</Button>
                </div>

            </div>
            {/* Personal */}
            {formIndex == 1 && <PersonalForm />}
            {formIndex == 2 && <SummaryForm />}
            {formIndex == 3 && <ExperienceForm />}
            {formIndex == 4 && <EducationForm />}
            {formIndex == 5 && <SkillForm />}
        </div>
    )
}
import { Button } from "@/components/ui/button";
import PersonalForm from "./personalForm";
import { useState } from "react";
import SummaryForm from "./summaryForm";
import ExperienceForm from "./experienceForm";
import EducationForm from "./educationForm";
import SkillForm from "./skillForm";
import { Link } from "react-router-dom";
import { House } from "lucide-react";

export default function FormSection() {

    let [formIndex, setFormIndex] = useState(1);

    return(
        <div className="p-6">
            <div className="mb-10 w-full flex justify-between space-x-2">
                <div className="">
                    <Link to="/dashboard" > <Button variant="outline"><House /></Button> </Link>
                </div>
                <div className="space-x-2">
                    <Button onClick={()=>setFormIndex(formIndex-1)} disabled={formIndex == 1} >Back</Button>
                    <Button onClick={()=>setFormIndex(formIndex+1)} disabled={formIndex == 5}>Next</Button>
                </div>
                
            </div>
            {/* Personal */}
            {formIndex == 1 && <PersonalForm/> }
            {formIndex == 2 && <SummaryForm/> }
            {formIndex == 3 && <ExperienceForm/> }
            {formIndex == 4 && <EducationForm/> }
            {formIndex == 5 && <SkillForm/> }
        </div>
    )
}
import { Button } from "@/components/ui/button";
import PersonalForm from "./personalForm";
import { useState } from "react";
import SummaryForm from "./summaryForm";
import ExperienceForm from "./experienceForm";
import EducationForm from "./educationForm";

export default function FormSection() {

    let [formIndex, setFormIndex] = useState(1);

    return(
        <div className="p-6">
            <div className="mb-10 w-full flex justify-end space-x-2">
                <Button onClick={()=>setFormIndex(formIndex-1)} disabled={formIndex == 1} >Back</Button>
                <Button onClick={()=>setFormIndex(formIndex+1)} disabled={formIndex == 4}>Next</Button>
            </div>
            {/* Personal */}
            
            {formIndex == 1 && <PersonalForm/> }
            {formIndex == 2 && <SummaryForm/> }
            {formIndex == 3 && <ExperienceForm/> }
            {formIndex == 4 && <EducationForm/> }
            
             
        </div>
    )
}
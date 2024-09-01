import { useContext } from "react";
import { ResumeContext } from "@/context/ResumeInfo";
import ExperiencePreview from "./experiencePreview";
import PersonalPreview from "./personalPreview";
import SkillPreview from "./skillPreview";
import SummaryPreview from "./summaryPreview";


export default function PreviewSection() {


    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);

    return (
        <div className="border-2 border-gray-500 rounded-lg p-3 space-y-5">
            {/* Personal */}
            <PersonalPreview resumeInfo={resumeInfo} />
            <div className="w-full border-2 border-gray-800 my-2 rounded-xl"></div>
            {/* summary */}
            <SummaryPreview />
            {/* Experience */}
            <ExperiencePreview />
            {/* Skill */}
            <SkillPreview />


        </div>
    )
}
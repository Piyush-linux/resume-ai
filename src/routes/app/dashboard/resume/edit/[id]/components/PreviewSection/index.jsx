import { useContext } from "react";
import { ResumeContext } from "@/context/ResumeInfo";
import ExperiencePreview from "./experiencePreview";
import PersonalPreview from "./personalPreview";
import SkillPreview from "./skillPreview";
import SummaryPreview from "./summaryPreview";
import EducationPreview from "./educationPreview";

export default function PreviewSection() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);

    return (
        <div className="resume w-full border-2 border-gray-500 rounded-lg p-10 space-y-5">
            {/* Personal */}
            <PersonalPreview resumeInfo={resumeInfo} />
            <div className="w-full border-2 border-gray-800 mb-2 rounded-xl"></div>
            {/* summary */}
            <SummaryPreview resumeInfo={resumeInfo} />
            {/* Experience */}
            <ExperiencePreview />
            {/* Education */}
            <EducationPreview/>
            {/* Skill */}
            <SkillPreview resumeInfo={resumeInfo} />
        </div>
    )
}
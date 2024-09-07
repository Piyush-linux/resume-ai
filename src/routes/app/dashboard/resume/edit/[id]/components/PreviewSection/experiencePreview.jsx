import { ResumeContext } from "@/context/ResumeInfo";
import { useContext } from "react"

export default function ExperiencePreview() {

let {resumeInfo, setResumeInfo} = useContext(ResumeContext);

    return (
        <div className="w-full">
            <div className="text-lg font-bold tracking-widest uppercase">experience</div>
            {/* List */}
            <div className="space-y-4">
                {/* 1: title-company-duration, company_description, my work in points  */}
                {[1, 2].map((x, i) => {
                    return (
                        <div className="" key={i}>
                            <div className="text-md"> {resumeInfo?.experience[0].position} </div>
                            <div className="text-md font-extrabold text-gray-600">RUSA</div>
                            <div className="text-sm">RUSA Centre for Food Product Development. RUSA R & I project, RTMNU</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
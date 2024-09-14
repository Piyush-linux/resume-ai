// import { ResumeContext } from "@/context/ResumeInfo";
// import { useContext } from "react"

export default function ExperiencePreview({resumeInfo}) {

// let {resumeInfo, setResumeInfo} = useContext(ResumeContext);
    return (
        <div className="w-full">
            <div className="text-lg font-bold tracking-widest uppercase">experience</div>
            {/* List */}
            <div className="space-y-3">
                {/* 1: title-company-duration, company_description, my work in points  */}
                { resumeInfo?.name  && resumeInfo?.experience.map((x, i) => {
                    return (
                        <div className="" key={i}>
                            <div className="text-md font-bold text-gray-500"> {x?.position} </div>
                            <div className="text-md w-full flex justify-between"> <span>{x?.company} | {x?.location}</span> <span className=" text-xs"> {x.startDate} to {x.endDate}  </span>  </div>
                            <div className="text-sm">{x?.summary}</div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
} 
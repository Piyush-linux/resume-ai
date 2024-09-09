import { ResumeContext } from "@/context/ResumeInfo";
import { useContext } from "react";

export default function EducationPreview() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);

    return (
        <div className="w-full">
            <div className="text-lg font-bold tracking-widest uppercase">education</div>
            {resumeInfo?.name && resumeInfo?.education.map((itm, i) => {
                return (
                    <div className="mb-3" key={i}>
                        <div className="font-bold text-gray-500 text-md"> {itm?.university} </div>
                        <div className="flex justify-between mb-1"> <span className="text-md">{itm?.degree} in {itm?.major}</span> <span className="text-xs">2024 to 2023</span>   </div>
                        <div className="text-sm text-justify"> {itm?.summary} </div>
                    </div>
                )
            })}


        </div>
    )
}
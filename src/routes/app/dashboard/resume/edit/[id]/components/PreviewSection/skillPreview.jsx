import { Badge } from "@/components/ui/badge";

export default function SkillPreview({resumeInfo}) {
    return(
        <div className="w-full space-y-1">
            <div className="text-lg font-bold tracking-widest uppercase">skill</div>
            <div className="w-full flex flex-wrap space-x-2">
                {
                    resumeInfo?.skills?.map((x,i)=>{
                            return <Badge key={i} className="rounded-md" variant={resumeInfo?.theme}> {x} </Badge>        
                    })
                }
            </div>
        </div>
    )
}
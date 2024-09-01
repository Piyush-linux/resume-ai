import { Badge } from "@/components/ui/badge";

export default function SkillPreview() {
    return(
        <div className="w-full space-y-1">
            <div className="text-lg font-bold tracking-widest uppercase">skill</div>
            <div className="w-full flex flex-wrap space-x-2">
                <Badge>docker</Badge>
                <Badge>html</Badge>
                <Badge>css</Badge>
                <Badge>js</Badge>
                <Badge>git</Badge>
            </div>
        </div>
    )
}
import { Textarea } from "@/components/ui/textarea";

export default function SummaryForm() {
    return(
        <div className="w-full">
            <div className="text-lg mb-3">
                Summary 
            </div>

            <div className="w-full space-y-3">
                <Textarea placeholder="address..." />
            </div>
        </div>
    )
}
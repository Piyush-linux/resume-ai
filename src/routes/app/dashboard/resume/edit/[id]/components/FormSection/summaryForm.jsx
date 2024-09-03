import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeContext } from "@/context/ResumeInfo";
import { Atom, Loader2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import AI from "./../../../../../../../../../service/AiModel";

export default function SummaryForm() {

    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    let [summary, setSummary] = useState();
    let [loading, setLoading] = useState(false);


    let genAI = async () => {
        setLoading(true)
        
        const prompt = "List 3 summary for an resume for {position} of 4 to 5 lines three different level such as beginner, intermediate and expert, with this schema: { 'level': beginner, 'summary': 'this is the summary'}, DO NOT INCLUDE BACKTICKS IN THE RESPONSE ";

        try {
            let newPrompt = prompt.replace("{position}",resumeInfo.position)
            const {response} = await AI.AIChatSession.sendMessage(newPrompt);
            

            // json_match = response.text().search(r"```json\s*(.*?)\s*```", json_str, re.DOTALL) ;



            // let data = JSON.parse(response)
            console.log(response.text());
        } catch (error) {
            console.error(error)
        }
        setLoading(false)

    }

    useEffect(() => {
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            ['summary']: summary
        }))
    }, [summary])


    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-5">
                <div className="text-lg">
                    Summary
                </div>

                <Button variant="outline" className="gap-2" onClick={()=> genAI()}><Atom />Gen AI</Button>
            </div>

            <div className="w-full space-y-3">
                <Textarea name="summary" placeholder="address..." defaultValue={resumeInfo.summary} onChange={(e) => setSummary(e.target.value)} />
            </div>
            <div className="w-fit mx-auto mt-6">
                <Button type="submit" variant="link"> {loading? <Loader2 className="animate-spin" /> : "save" } save  </Button>
            </div>
        </div>
    )
}
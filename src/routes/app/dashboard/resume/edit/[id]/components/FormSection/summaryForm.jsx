import { ResumeContext } from "@/context/ResumeInfo";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Atom, Loader2 } from "lucide-react";
import AI from "./../../../../../../../../../service/AiModel";
import API from "./../../../../../../../../../service/GlobalApi";
import { toast } from "react-toastify";


export default function SummaryForm() {

    let { id } = useParams();
    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    let [summary, setSummary] = useState();
    let [loading, setLoading] = useState(false);
    let [aiList, setAiList] = useState([]);

    let genAI = async () => {
        setLoading(true)

        const prompt = "List 3 summary for an resume for {position} of 4 to 5 lines three different level such as beginner, intermediate and expert, with this schema: [{ 'level': beginner, 'summary': 'this is the summary'}], DO NOT INCLUDE BACKTICKS IN THE RESPONSE ";

        try {
            // console.log(resumeInfo?.position)
            let newPrompt = prompt.replace("{position}", resumeInfo?.position)
            const { response } = await AI.sendMessage(newPrompt);

            // json_match = response.text().search(r"```json\s*(.*?)\s*```", json_str, re.DOTALL) ;

            let data = JSON.parse(response.text())
            setAiList(data);
            // let data = JSON.parse(response)
            console.log(data);
        } catch (error) {
            console.error(error)
        }
        setLoading(false)

    }


    let handleList = (sum) => {
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            ['summary']: sum
        }))
        setSummary(sum)
    }


    let handleTextarea = (e) => {
        setResumeInfo(resumeInfo => ({
            ...resumeInfo,
            ['summary']: e.target.value
        }))
        setSummary(e.target.value)
    }


    let handleSave = async () => {
        setLoading(true)
        try {
            let data = await API.UpdateSingleResume(id, { data: { summary: summary } });
            // console.log(data)
            toast("Data Saved !");
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        setSummary(resumeInfo?.summary)
    }, [summary])


    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between mb-5">
                <div className="content mb-3">
                    <div className="text-xl">Summary</div>
                    <div className="text-sm">Add your summary details.</div>
                </div>

                <Button variant="outline" className="gap-2" onClick={() => genAI()}><Atom />Gen AI</Button>
            </div>

            <div className="w-full space-y-3">
                <Textarea rows="10" name="summary" defaultValue={summary} placeholder="address..." onChange={handleTextarea} />
            </div>
            <div className="w-full mx-auto mt-6">
                <Button type="submit" variant="link" onClick={() => handleSave()} className="w-full"> {loading ? <Loader2 className="animate-spin" /> : "Save"}  </Button>
            </div>
            {/* Summary... */}
            <div className="w-full mt-10 overflow-y-scroll h-80">
                {aiList.length > 0 && aiList.map((x, i) => {
                    return (<div onClick={() => handleList(x.summary)} className="p-6 shadow-xl cursor-pointer rounded-lg border-2 border-rose-400 space-y-3 mb-5" key={i}>
                        <div className="text-xl"> {x.level} </div>
                        <p className="text-xs" > {x.summary} </p>
                    </div>)
                })}
            </div>
        </div>
    )
}
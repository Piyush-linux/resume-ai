import { ResumeContext } from "@/context/ResumeInfo";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Atom, Loader2 } from "lucide-react";
import AI from "./../../../../../../../../../service/AiModel";
import API from "./../../../../../../../../../service/GlobalApi";


export default function SummaryForm() {

    let { id } = useParams();
    let { resumeInfo, setResumeInfo } = useContext(ResumeContext);
    let [summary, setSummary] = useState();
    let [loading, setLoading] = useState(false);
    let [aiList,setAiList] = useState([]);

    let genAI = async () => {
        setLoading(true)
        
        const prompt = "List 3 summary for an resume for {position} of 4 to 5 lines three different level such as beginner, intermediate and expert, with this schema: [{ 'level': beginner, 'summary': 'this is the summary'}], DO NOT INCLUDE BACKTICKS IN THE RESPONSE ";

        try {
            // console.log(resumeInfo?.position)
            let newPrompt = prompt.replace("{position}",resumeInfo?.position)
            const {response} = await AI.sendMessage(newPrompt);
            

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


    let handleList = (sum)=>{
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
        try {
            let data = await API.UpdateSingleResume(id, {data:{summary: summary}});
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setSummary(resumeInfo?.summary)
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
                <Textarea name="summary" defaultValue={summary} placeholder="address..." onChange={handleTextarea} />
            </div>
            <div className="w-fit mx-auto mt-6">
                <Button type="submit" variant="link" onClick={()=> handleSave() }> {loading? <Loader2 className="animate-spin" /> : "save" }  </Button>
            </div>
            <div className="w-full mt-10 overflow-y-scroll h-80">
                { aiList.length > 0 && aiList.map((x,i)=>{
                    return (<div onClick={()=> handleList(x.summary) } className="p-6 shadow-xl cursor-pointer rounded-lg border-2 border-rose-400 space-y-3 mb-5" key={i}>  
                        <div className="text-xl"> {x.level} </div>
                        <p className="text-xs" > {x.summary} </p>
                    </div>)
                }) }
            </div>
        </div>
    )
}
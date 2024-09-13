import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResumeContext } from "@/context/ResumeInfo";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";
import PreviewSection from "../../resume/edit/[id]/components/PreviewSection";
import API from "./../../../../../../service/GlobalApi"

export default function View() {

    let { id } = useParams();
    let [resumeInfo, setResumeInfo] = useState();
    let [loading, setLoading] = useState(false);

    let getSingleResume = async () => {
        try {
            let { data } = await API.FetchSingleResume(id);
            setResumeInfo(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)

    }

    const HandleDownload = () => {
        window.print();
    }

    useEffect(() => {
        // setResumeInfo(data)
        getSingleResume();
        console.log(resumeInfo)
    }, [id])

    return (
        <div className="">
            <div className="shadow-xl py-6 rounded-xl px-6 mb-10 no-print">
                <div className="text-4xl text-center w-full max-w-6xl mx-auto mb-6 font-bold ">
                    Congratulations on successfully generating your CV !
                    <picture className="mx-auto w-fit">
                        <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.webp" type="image/webp" />
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif" alt="🥳" className="w-16 h-16 mx-auto mt-6" />
                    </picture>
                </div>
                <div className="w-full flex justify-between mx-auto">
                    <Button className="gap-2 text-md" onClick={() => HandleDownload()}>Download <Download size={18} strokeWidth={2} /> </Button>
                    <Button className="gap-2 text-md" >Share <Share2 size={18} strokeWidth={2} /> </Button>
                </div>
            </div>
            <div className="print-area p-6">
                <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
                    <PreviewSection />
                </ResumeContext.Provider>
            </div>
        </div>
    )
}
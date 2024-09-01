import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ResumeContext } from "@/context/ResumeInfo";
import API from "./../../../../../../../service/GlobalApi"
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import FormSection from "./components/FormSection";
import PreviewSection from "./components/PreviewSection";
import data from "./../../../../../../../data/dummy";

/*
- get resumeid params
- fetch other Info

*/
export default function EditResume() {
    const { id } = useParams();
    let navigate = useNavigate();
    let [resumeInfo, setResumeInfo] = useState('');
    //-- TODO turn tru after API connection
    let [loading, setLoading] = useState(false);

    let getSingleResume = async () => {
        try {
            let { data } = await API.FetchSingleResume(id);
            setResumeInfo(data.data[0])
            // console.log(ResumeInfo)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)

    }

    let removeResume = async () => {
        try {
            let data = await API.RemoveSingleResume(resumeInfo.documentId);
            // setResumeInfo(data)
            // console.log(data);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setResumeInfo(data)
        // getSingleResume();
    }, [id])

    return (
        <ResumeContext.Provider value={{resumeInfo,setResumeInfo}}>
            <div className="">
                {/* Edit : {id} / <Button onClick={()=> removeResume()}>Remove</Button> */}
                {/* Title: {ResumeInfo.title} */}
                {resumeInfo?.name}
                {loading ? <Loader /> :

                    (<div className="w-full grid grid-cols-2">
                        <FormSection className="col-span-1" />
                        <PreviewSection className="col-span-1"  />
                    </div>)
                }
            </div>
        </ResumeContext.Provider>
    )
}
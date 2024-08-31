import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import API from "./../../../../../../../service/GlobalApi"
import Loader from "@/components/Loader";

/*
- get resumeid params
- fetch other Info

*/ 
export default function EditResume() {
    const {id} = useParams();
    
    let [ResumeInfo,setResumeInfo] = useState('');
    let [loading,setLoading] = useState(true);

    let getSingleResume = async () => {
            try {

                let {data} = await API.FetchSingleResme(id);
                setResumeInfo(data.data[0])
            } catch (error) {
                console.log(error);
            }    
            setLoading(false)
        
    }

    useEffect(()=>{
        getSingleResume();
    },[id])

    return(
        <div className="">
            {/* Edit : {id} */}
            {loading? <Loader/> : 
            
            (<div className="text-xl">
                Title: {ResumeInfo.title}
            </div>)
            }
            
            
        </div>
    )
}
import {  useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "./../../../../service/GlobalApi"
import ResumeCard from "@/components/app/ResumeCard";
import AddResume from "@/components/app/AddResume";



export default function Dashboard() {
    const navigate = useNavigate();
    let { isLoaded, isSignedIn, user  } = useUser();
    let [resumes,setResumes] = useState([]);
    if (isLoaded) {
        if (!isSignedIn) {
            console.log(isSignedIn)
            navigate('/auth/sign-in')
        }    
    } ;

    let getResume = async () =>{
        let mail = await user?.primaryEmailAddress?.emailAddress
        // console.log(mail)
        if(mail){
            let { data } = await API.FetchResume(mail);
            setResumes(data.data)
        }
        
    }
    

    useEffect(()=>{
        getResume()
    },[user])


    return (
        <>
            <div className="p-5 sm:px-10 md:px-16 lg:px-28">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                    <div className="col-span-1 h-80 p-6">
                        <AddResume refreshData={getResume} />
                    </div>
                    {
                        resumes.length != 0 && resumes.map((x,i)=>{
                        return(
                        <div className="col-span-1" key={i}>
                            <ResumeCard title={x.title} resumeid={x.resumeid} color="bg-lime-300" />
                        </div>
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}
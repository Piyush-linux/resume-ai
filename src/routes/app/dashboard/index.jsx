import ResumeCard from "@/components/app/ResumeCard";
import { useNavigate } from "react-router-dom";
import {  useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import AddResume from "@/components/app/AddResume";



export default function Dashboard() {
    const navigate = useNavigate();
    let { isLoaded, isSignedIn  } = useUser();


    

    if (isLoaded) {
        if (!isSignedIn) {
            console.log(isSignedIn)
            navigate('/auth/sign-in')
        }    
    } ;
    

    useEffect(()=>{
        
    },[isLoaded])


    return (
        <>
            <div className="p-5 sm:px-10 md:px-16 lg:px-28">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                    <div className="col-span-1 h-80 p-6">
                        <AddResume/>
                    </div>
                    <div className="col-span-1">
                        <ResumeCard  color="bg-lime-300" />
                    </div>
                    <div className="col-span-1">
                        <ResumeCard  color="bg-rose-300" />
                    </div>
                    <div className="col-span-1">
                        <ResumeCard  color="bg-amber-300" />
                    </div>
                    <div className="col-span-1">
                        <ResumeCard  color="bg-emerald-300" />
                    </div>
                </div>

            </div>
        </>
    )
}
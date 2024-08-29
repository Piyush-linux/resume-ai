import { SignUp } from '@clerk/clerk-react'

export default function SignUnPage() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
            <SignUp path="/auth/sign-up" />
            </div>
        </>
    )
}
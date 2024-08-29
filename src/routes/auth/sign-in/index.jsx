import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <SignIn path="/auth/sign-in" />
            </div>
        </>
    )
}
import { useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"



export default function App() {
  const navigate = useNavigate();
  let { isLoaded, isSignedIn } = useUser();

  if (isLoaded) {
    if (isSignedIn) {
      navigate('/dashboard')
    }
  };


  return (
    <>
      <div className="">

        <div className="nav p-3">
          <Button variant="primary">
            <Link to="/auth/sign-in">Login</Link>
          </Button>
        </div>
        <div className="w-full h-[60vh] flex items-center justify-center">
          <Button variant="primary">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
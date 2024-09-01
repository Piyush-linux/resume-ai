import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PersonalForm() {

    let formSubmit = (e) => {
        e.preventDefault();
        console.log("Hello")
    }

    return (
        <div className="w-full">
            <div className="text-lg mb-3">
                Personal
            </div>

            <form className="w-full space-y-3" onSubmit={formSubmit}>
                <Input type="text" placeholder="Name" />
                <Input type="text" placeholder="Job title" />
                <Input type="text" placeholder="Number" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Location" />
                <div className="w-fit mx-auto mt-6">
                    <Button type="submit" variant="link">save</Button>
                </div>
            </form>


        </div>
    )
}
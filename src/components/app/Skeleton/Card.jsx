import { Skeleton } from "@/components/ui/skeleton"


export default function SkeletonResumeCard() {
    return (
        <div className="">
            <Skeleton className="w-full h-48 rounded-md" />
            <Skeleton className="w-full h-10 rounded-md mt-6" />
            <div className="flex gap-4 mt-3">
                <Skeleton className="w-1/3 h-10 rounded-md mt-3" />
                <Skeleton className="w-1/3 h-10 rounded-md mt-3" />
                <Skeleton className="w-1/3 h-10 rounded-md mt-3" />
            </div>
        </div>
    )
}
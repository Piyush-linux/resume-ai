export default function SummaryPreview({resumeInfo}) {
    
    return (
        <div className="w-full">
            <div className="text-lg font-bold tracking-widest uppercase">summary</div>
            <p className="text-xs text-justify">
                {resumeInfo.summary}
            </p>
        </div>
    )
} 
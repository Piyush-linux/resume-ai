export default function ExperiencePreview() {
    return (
        <div className="w-full">
            <div className="text-lg font-bold tracking-widest uppercase">experience</div>
            {/* List */}
            <div className="space-y-4">
                {/* 1: title-company-duration, company_description, my work in points  */}
                {[1, 2].map((x, i) => {
                    return (
                        <div className="" key={i}>
                            <div className="text-md">Senior Frontend Developer</div>
                            <div className="text-md font-extrabold text-gray-600">RUSA</div>
                            <div className="text-sm">RUSA Centre for Food Product Development. RUSA R & I project, RTMNU</div>
                            <ul className="pl-4 text-xs mt-2 text-justify" style={{ listStyleType: "circle" }} >
                                <li>Lead development of responsive web applications using React and Node.js. </li>
                                <li>Collaborated with UX/UI designers to implement modern design principles, improving user engagement by 30%. </li>
                                <li>Optimized website performance, reducing load times by 25% through code and asset optimization. </li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
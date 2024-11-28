"use client"

import { useEffect, useState } from "react"
import { Avatar } from "@nextui-org/react"

export default function Page() {
    const [experienceData, setExperienceData] = useState<IExperienceData[]>([])

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => setExperienceData(data.experience))
            .catch((error) => console.error("Error fetching data:", error))
    }, [])

    return (
        <div className="flex items-center flex-col justify-center py-8 md:py-16 px-4 sm:px-8">
            <div className="border-l border-neutral-700 flex gap-y-24 flex-col py-8">
                {experienceData.map((experience) => (
                    <div className="relative" key={experience.id}>
                        <Avatar
                            src="https://images.unsplash.com/broken"
                            isBordered
                            color="success"
                            className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                        />
                        <div className="ml-12 flex items-start sm:items-center flex-col sm:flex-row gap-x-8 gap-y-4 sm:gap-y-0">
                            <div className="bg-content1 h-12 flex items-center w-full sm:w-52 justify-center rounded-3xl px-8 font-bold text-xl">
                                {experience.period}
                            </div>
                            <div>
                                <div className="font-bold text-2xl sm:text-3xl">
                                    {experience.institution}
                                </div>
                                <div className="text-lg sm:text-xl mt-4">
                                    {experience.role}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

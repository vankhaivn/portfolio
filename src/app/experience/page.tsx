import { Avatar, Card, CardBody } from "@nextui-org/react"

export default function Page() {
    return (
        <div className="flex items-center flex-col justify-center pt-24 px-4 sm:px-8">
            <div className="border-l border-neutral-700 flex gap-y-24 flex-col py-12">
                <div className="relative">
                    <Avatar
                        src="https://images.unsplash.com/broken"
                        className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    />
                    <div className="ml-12 flex items-start sm:items-center flex-col sm:flex-row gap-x-8 gap-y-4 sm:gap-y-0">
                        <div className="bg-content1 h-12 flex items-center w-full sm:w-52 justify-center rounded-3xl px-8 font-bold text-xl">
                            2021 - now
                        </div>
                        <div>
                            <div className="font-bold text-2xl sm:text-3xl">
                                Danang University of Science and Technology
                            </div>
                            <div className="text-lg sm:text-xl mt-4">
                                Bachelor of Data Science
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Avatar
                        src="https://images.unsplash.com/broken"
                        className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2"
                    />
                    <div className="ml-12 flex items-start sm:items-center flex-col sm:flex-row gap-x-8 gap-y-4 sm:gap-y-0">
                        <div className="bg-content1 h-12 flex items-center w-full sm:w-52 justify-center rounded-3xl px-8 font-bold text-xl">
                            2024 - now
                        </div>
                        <div>
                            <div className="font-bold text-2xl sm:text-3xl">
                                Free AI Utilities
                            </div>
                            <div className="text-lg sm:text-xl mt-4">
                                Intern Front End Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

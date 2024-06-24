"use client"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
    faArrowLeft,
    faArrowRight,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Image } from "@nextui-org/react"
import { useEffect, useState } from "react"

export default function Page() {
    const [projectsData, setProjectsData] = useState<IProject[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetch("/data/data.json")
            .then((response) => response.json())
            .then((data) => setProjectsData(data.projects))
            .catch((error) => console.error("Error fetching data:", error))
    }, [])

    const currentProject = projectsData[currentIndex]

    const handlePrevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
        )
    }

    const handleNextProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <div className="flex-grow pt-12">
            {currentProject && (
                <>
                    <div className="flex justify-between items-center gap-x-8">
                        <div className="w-2/3 flex flex-col justify-between h-96">
                            <div className="text-6xl font-extrabold">
                                {currentProject.id}
                            </div>
                            <div className="text-3xl font-bold">
                                {currentProject.name} -{" "}
                                <span className="text-success-500">
                                    {currentProject.role}
                                </span>
                            </div>
                            <div>{currentProject.description}</div>
                            <div className="text-success-500 font-bold">
                                {currentProject.technologies}
                            </div>
                            <ul>
                                {currentProject.tasks.map((task, index) => (
                                    <li key={index}>- {task}</li>
                                ))}
                            </ul>
                            <Divider />
                            <div className="flex gap-x-4">
                                <Button
                                    isIconOnly
                                    color="success"
                                    variant="ghost"
                                    size="lg"
                                    radius="full"
                                    onClick={() =>
                                        window.open(
                                            currentProject.link,
                                            "_blank"
                                        )
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={faArrowUpRightFromSquare}
                                    />
                                </Button>
                                <Button
                                    isIconOnly
                                    color="success"
                                    variant="ghost"
                                    size="lg"
                                    radius="full"
                                    onClick={() =>
                                        window.open(
                                            currentProject.github,
                                            "_blank"
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </Button>
                            </div>
                        </div>
                        <div className="w-1/3">
                            <Image
                                isBlurred
                                src={currentProject.image}
                                alt={currentProject.name}
                                className="w-96 h-96 cursor-pointer"
                                isZoomed
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-x-4 mt-24">
                        <Button
                            variant="flat"
                            isIconOnly
                            color="success"
                            size="lg"
                            onClick={handlePrevProject}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                        <Button
                            variant="flat"
                            isIconOnly
                            color="success"
                            size="lg"
                            onClick={handleNextProject}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}

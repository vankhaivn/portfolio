import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@nextui-org/react"

export default function Page() {
    return (
        <div className="pt-16 flex flex-col justify-between">
            <div className="flex justify-between flex-1">
                <div className="flex-1">
                    <div className="mb-4 font-semibold text-xl">
                        Front End Developer
                    </div>
                    <div className="font-bold text-6xl">
                        <div>Hello I'm</div>
                        <div className="text-green-600">Nguyen Van Khai</div>
                    </div>
                    <div className="mt-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Vero repudiandae quod culpa explicabo dolore
                        dolorem ex aut fuga adipisci tenetur.
                    </div>
                    <div className="flex mt-8 justify-between">
                        <Button variant="flat" size="lg" color="success">
                            <FontAwesomeIcon icon={faDownload} size="lg" />
                            Download CV
                        </Button>
                        <div className="flex gap-x-4">
                            <Button
                                variant="flat"
                                size="lg"
                                color="success"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faGithub} size="lg" />
                            </Button>
                            <Button
                                variant="flat"
                                size="lg"
                                color="success"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                            </Button>
                            <Button
                                variant="flat"
                                size="lg"
                                color="success"
                                isIconOnly
                                className="rounded-full"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex-1">right</div>
            </div>
            <div className="mt-20 flex justify-between">
                <div className="flex gap-x-4 items-center">
                    <div className="font-bold text-5xl">12</div>
                    <div className="w-20">Years of experience</div>
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className="font-bold text-5xl">12</div>
                    <div className="w-20">Years of experience</div>
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className="font-bold text-5xl">12</div>
                    <div className="w-20">Years of experience</div>
                </div>
                <div className="flex gap-x-4 items-center">
                    <div className="font-bold text-5xl">12</div>
                    <div className="w-20">Years of experience</div>
                </div>
            </div>
        </div>
    )
}

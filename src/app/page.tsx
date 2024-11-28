import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Avatar, Button } from "@nextui-org/react"

export default function Page() {
    const selfPreview =
        "As a disciplined and analytical Junior Fullstack Web Developer, I bring nearly one year of hands-on experience working with various organizations since my third year of university. Currently a final-year student with a commendable cumulative GPA of 3.6, I take pride in balancing academic excellence with practical industry exposure.\n\nI am seeking a company that offers challenging and engaging work, along with competitive compensation that aligns with my skills and potential in the field of Fullstack Web Development."
    return (
        <div className="flex justify-between flex-1 pt-[8vh]">
            <div className="flex-1">
                <div className="mb-4 font-semibold text-xl">
                    Fullstack Web Developer
                </div>
                <div className="font-bold text-6xl">
                    <div>Hello I'm</div>
                    <div className="text-green-600">Nguyen Van Khai</div>
                </div>
                <div className="mt-8 whitespace-pre-line text-sm">
                    {selfPreview}
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
            <div className="flex-1 flex justify-end">
                <Avatar src="/avatar.jpg" isBordered className="w-80 h-80" />
            </div>
        </div>
    )
}

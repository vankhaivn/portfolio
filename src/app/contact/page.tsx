import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Page() {
    return (
        <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-0">
            <div className="text-5xl text-success-500 font-bold mb-16">
                Let's work together!
            </div>
            <div className="flex flex-col items-start gap-y-8">
                <div className="flex items-center gap-x-4">
                    <div className="bg-content1 h-20 w-20 flex justify-center items-center rounded-xl">
                        <FontAwesomeIcon
                            icon={faPhone}
                            className="text-success-500"
                            size="2xl"
                        />
                    </div>
                    <div className="font-semibold">
                        <div className="text-foreground-400 text-xl">Phone</div>
                        <a
                            href="tel:+84589087818"
                            className="text-2xl mt-2 hover:text-success-500 duration-150"
                            target="_blank"
                        >
                            (+84) 589 087 818
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="bg-content1 h-20 w-20 flex justify-center items-center rounded-xl">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="text-success-500"
                            size="2xl"
                        />
                    </div>
                    <div className="font-semibold">
                        <div className="text-foreground-400 text-xl">Email</div>
                        <a
                            href="mailto:ngvankhai0303@gmail.com"
                            className="text-2xl mt-2 hover:text-success-500 duration-150"
                            target="_blank"
                        >
                            ngvankhai0303@gmail.com
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="bg-content1 h-20 w-20 flex justify-center items-center rounded-xl">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-success-500"
                            size="2xl"
                        />
                    </div>
                    <div className="font-semibold">
                        <div className="text-foreground-400 text-xl">
                            Location
                        </div>
                        <div className="text-2xl mt-2">Danang, Vietnam</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

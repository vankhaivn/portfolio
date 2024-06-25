import {
    NestJsIcon,
    NextJsIcon,
    NodeJsIcon,
    ReactJsIcon,
    TailwindIcon,
    TypescriptIcon,
} from "@/components/icons"
import { Divider, Tooltip } from "@nextui-org/react"

export default function Page() {
    return (
        <div className="py-8">
            <div className="mb-16">
                <div className="text-4xl font-bold text-center">
                    My FrontEnd Skills
                </div>
                <div className="mt-4 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam molestiae aliquid perferendis iure eligendi quod
                    atque iusto velit? Explicabo, nostrum.
                </div>
                <div className="grid grid-cols-12 grid-rows-1 mt-8 gap-x-8">
                    <Tooltip
                        content={<TooltipContent content="Next JS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <NextJsIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="React JS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <ReactJsIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="Typescript" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <TypescriptIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="Tailwind CSS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <TailwindIcon size={120} />
                        </div>
                    </Tooltip>
                </div>
            </div>
            <Divider />
            <div className="mt-16">
                <div className="text-4xl font-bold text-center">
                    My BackEnd Skills
                </div>
                <div className="mt-4 text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quibusdam molestiae aliquid perferendis iure eligendi quod
                    atque iusto velit? Explicabo, nostrum.
                </div>
                <div className="grid grid-cols-12 grid-rows-2 mt-8 gap-x-8">
                    <Tooltip
                        content={<TooltipContent content="Nest JS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <NestJsIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="Node JS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <NodeJsIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="Typescript" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <TypescriptIcon size={120} />
                        </div>
                    </Tooltip>
                    <Tooltip
                        content={<TooltipContent content="Tailwind CSS" />}
                        color="success"
                        size="lg"
                    >
                        <div className="col-span-6 mt-4 md:col-span-3 bg-content1 rounded-xl h-56 flex justify-center cursor-pointer items-center hover:bg-content2 transition-colors duration-150">
                            <TailwindIcon size={120} />
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

const TooltipContent = ({ content }: { content: string }) => {
    return <div className="font-bold text-2xl py-2">{content}</div>
}

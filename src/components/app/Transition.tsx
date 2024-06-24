"use client"
import { motion } from "framer-motion"
export default function Transition({
    children,
}: {
    children: React.ReactNode
}) {
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    }
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col flex-grow"
        >
            {children}
        </motion.div>
    )
}

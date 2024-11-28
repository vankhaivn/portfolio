import * as React from "react"
import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider } from "next-themes"

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextUIProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                themes={["light", "dark"]}
            >
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}

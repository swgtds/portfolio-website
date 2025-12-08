
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  )
}

import React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"

export const metadata: Metadata = {
  title: "Sandipan",
  description:
    "Welcome to the world of Sandipan Dey, a Product Developer who loves to play music and make YouTube videos on the side! 🚀",
}

const neueMontrealFont = localFont({
  src: [
    {
      path: "../assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  preload: true,
})

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${neueMontrealFont.className} antialiased`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout

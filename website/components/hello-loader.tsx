"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Hellos = [
  { text: "Hello", time: 2000 },
  { text: "Olá", time: 200 },
  { text: "नमस्ते ✨", time: 500 },
  { text: "Bonjour", time: 700 },
  { text: "Привет", time: 300 },
  { text: "$h!*", time: 200 },
]

const HelloLoader = () => {
  const [helloIndex, setHelloIndex] = useState(0)
  const [showHello, setShowHello] = useState(true)

  useEffect(() => {
    let timeout

    if (helloIndex < Hellos.length - 1) {
      // Show next hello
      timeout = setTimeout(() => {
        setHelloIndex(helloIndex + 1)
      }, Hellos[helloIndex].time)
    } else {
      // After the last hello, start the exit transition
      timeout = setTimeout(() => {
        setShowHello(false)
      }, Hellos[helloIndex].time)
    }

    return () => clearTimeout(timeout)
  }, [helloIndex])

  return (
    <AnimatePresence>
      {showHello && (
        <motion.div
          className="absolute bg-dark w-screen h-screen flex justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            key={helloIndex}
            className="text-text-light font-medium text-3xl sm:text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Hellos[helloIndex].text}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { HelloLoader }

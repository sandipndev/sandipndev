import Image from "next/image"
import DP from "@/assets/images/dp.jpg"

import React from "react"

const Picture = () => {
  return (
    <div className="w-60 h-60 rounded-full overflow-hidden border-spacing-2 border-white border-[10px]">
      <Image src={DP} alt="Display Picture" />
    </div>
  )
}

export { Picture }

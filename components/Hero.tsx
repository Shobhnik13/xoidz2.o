'use client'

import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="flex flex-col relative">
    <div className="flex flex-col items-center justify-center mt-8 m-auto w-[90%] md:w-[50%] lg:w-[40%]">
        <h1 className="bg-clip-text text-transparent pb-2 bg-gradient-to-t from-[#331083] to-[#2b1265] text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">Single Dashboard To manage all your orders</h1>
        <p className="text-[#331083ff] text-center mt-2 md:mt-4">No more juggling between multiple screens. Xoidz multichannel e-commerce integration allows you to manage all your orders from One Dashboard.</p>
        <Button className="bg-[#311b66] text-white text-sm md:text-base lg:text-lg mt-2 sm:mt-12 md:mt-4 rounded-2xl hover:scale-110 duration-200 ease-in-out transition-all hover:bg-[#311b66]/80">Get started for free</Button>
    </div>
    <div className="h-[300px] md:h-[400px] lg:h-[500px] absolute right-4 md:right-[4rem] lg:left-[4rem] xl:right-[6rem] top-[16rem] sm:top-[21rem] md:top-[24rem] xl:top-[24rem] flex justify-center items-center rounded-3xl">
        <div className="mt-8 md:mt-0">
            <Image alt="img1" height={300} width={800} className="pb-20 md:pb-36 lg:pb-48" src='/img1.png'/>
        </div>
    </div>
</div>

  )
}

export default Hero
'use client'

import Image from "next/image"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import {motion} from 'framer-motion'
import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div  className="py-8 rounded-[20px] h-[520px] sm:h-[600px] md:h-[650px] mt-2 flex flex-col relative bg-gradient-to-r from-[#ddd8ffff] via-[#f1ecff] to-[#f4faff]">
      <div className="">
      <Navbar/>
      </div>
    <div data-aos="fade-right" className="flex flex-col items-center justify-center mt-24 md:mt-16 m-auto w-[90%] md:w-[50%] lg:w-[40%]">
        <h1 className="bg-clip-text text-transparent pb-2 bg-gradient-to-t from-[#331083] to-[#2b1265] text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center">Single Dashboard To manage all your orders</h1>
        <p className="text-[#331083ff] text-center mt-2 md:mt-4">No more juggling between multiple screens. Xoidz multichannel e-commerce integration allows you to manage all your orders from One Dashboard.</p>
        <Button className="bg-[#311b66] text-white text-sm md:text-base lg:text-lg mt-2 sm:mt-12 md:mt-4 rounded-2xl hover:scale-110 duration-200 ease-in-out transition-all hover:bg-[#311b66]/80">Get started for free</Button>
    </div>
    <div className="mr-8 md:mt-15 flex justify-center items-center rounded-3xl">
        <div className="">
            <Image data-aos="fade-left" alt="img1" height={300} width={800} className="pb-20 md:pb-36 lg:pb-48" src='/img1.png'/>
        </div>
    </div>
</div>

  )
}

export default Hero
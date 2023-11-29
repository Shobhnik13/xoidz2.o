'use client'
import Image from "next/image"
import { Button } from "./ui/button"

const Navbar = () => {
    return (
      <div>
          {/* for laps  */}
          <div className="hidden md:block ">
              <div className="flex justify-center ">
                    <div className="w-[50%] h-[60px]  bg-gray-100/100 rounded-2xl py-6  flex justify-between items-center px-4 shadow-xl border mt-4">
                        {/* left / */}
                        <div className="flex items-center justify-center">
                            <Image alt="logo image" width={120} height={120} src='/xoidz.png'/>
                            <ul className="pl-3 flex gap-x-4 border-l text-purple-900/100  cursor-pointer text-sm 2xl:text-lg font-medium  border-gray-300">
                                <li className=" hover:text-purple-900/80">Product</li>
                                <li className=" hover:text-purple-900/80">Resources</li>
                                <li className=" hover:text-purple-900/80">Pricing</li>
                            </ul>
                        </div>
                        {/* right  */}
                        <div>
                            <Button variant="secondary" className="bg-white hover:bg-white shadow-md shadow-gray-300 hover:scale-105 text-purple-900/100 ease-in-out transition-all 2xl:text-lg duration-200 rounded-xl">Log in</Button>
                        </div>
                    </div>
              </div>
          </div>
          
          {/* for mobiles  */}
          <div className="lg:hidden block">
  
          </div>
      </div>
    )
  }
  
  export default Navbar
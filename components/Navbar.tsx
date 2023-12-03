'use client'
import Image from "next/image"
import { Button } from "./ui/button"
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
const Navbar = () => {
    return (
      <div className="-mt-8">
          {/* for laps  */}
          <div className="hidden md:block ">
              <div className="flex justify-center">
                    <div className="w-[50%] h-[60px] fixed z-50  bg-gray-100/100 rounded-2xl py-6  flex justify-between items-center px-4 shadow-xl border mt-4">
                        {/* left / */}
                        <div className="flex items-center justify-center">
                            <Image alt="logo image" width={120} height={120} src='/xoidz.png'/>
                            <ul className="pl-3 flex gap-x-4 border-l text-purple-900/100  cursor-pointer text-sm 2xl:text-lg font-medium  border-gray-300">
                                <li className=" hover:border-b-2 border-purple-900/80">Product</li>
                                <li className=" hover:border-b-2 border-purple-900/80">Resources</li>
                                <li className=" hover:border-b-2 border-purple-900/80">Pricing</li>
                            </ul>
                        </div>
                        {/* right  */}
                        <div>
                            <Button variant="secondary" className="text-white  shadow-md shadow-gray-300 hover:scale-105 bg-purple-900/100 ease-in-out transition-all 2xl:text-lg duration-200 rounded-xl">Log in</Button>
                        </div>
                    </div>
              </div>
          </div>
          
          {/* for mobiles  */}
          <div className="block md:hidden mr-5">
            <div className="flex w-[90%] mx-4 h-[60px] mt-8 border shadow-xl  rounded-3xl p-3 fixed z-50  bg-gray-100/100 justify-between items-center">
                <div><Image src={'/xoidz.png'} width={120} height={120} className="ml-2" alt="logo"/></div>
                <div className="flex flex-col justify-between">
                        <DropdownMenu >
                        <DropdownMenuTrigger><RxHamburgerMenu className=" w-8 h-8"/></DropdownMenuTrigger>
                        <DropdownMenuContent className="flex  md:hidden z-50 w-[90vw] h-[45vh]  content-center flex-col items-center justify-center  gap-y-6  bg-gray-100/100 rounded-3xl mr-5  sm:mr-10  py-8 shadow-2xl  mt-4">
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem className="text-xl text-purple-900/100 hover:border-b-2 border-purple-900/80 ">Product</DropdownMenuItem>
                        <DropdownMenuItem className="text-xl text-purple-900/100 hover:border-b-2 border-purple-900/80">Resources</DropdownMenuItem>
                        <DropdownMenuItem className="text-xl text-purple-900/100 hover:border-b-2 border-purple-900/80">Pricing</DropdownMenuItem>
                        <Button variant="secondary" className="text-white  shadow-md shadow-gray-300 hover:scale-105 bg-purple-900/100 ease-in-out transition-all text-lg w-[90%] 2xl:text-lg duration-200 rounded-xl">Log in</Button>{/* <Button>Login</Button> */}
                        </DropdownMenuContent>
                        </DropdownMenu>
                </div>
            </div>

          </div>
      </div>
    )
  }
  
  export default Navbar
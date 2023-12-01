'use client'

import Image from 'next/image';
import CountUp from 'react-countup';
import { FaStar } from "react-icons/fa";
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
const UserSection = () => {
    const router=useRouter()
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-56 md:mt-52 lg:mt-56 mx-4 md:mx-4 lg:mx-0">
        {/* running  */}
        <div className="text-[#3c305aff] hidden sm:block text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
        </div>
        {/* for mobiles   */}
        <div className="text-[#3c305aff] block w-[300px] mt-36 sm:hidden text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp  className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
        </div>
        
        {/* ratings  */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8  gap-x-44 mt-12'>
            <div className='flex gap-x-2'>
                <Image src={'/ph.png'} className='' height={50} width={50} alt='product_hunt'/>
                <div className='flex flex-col'>
                    <p className='flex items-center gap-x-1 text-green-600 font-semibold text-lg'><FaStar/>4.3/5</p>
                    <p className='text-base text-[#331083ff]'>Rated by users on <span className='text-red-400 text-lg font-semibold'>Product Hunt</span> </p>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <Image src={'/google.png'} className='' height={50} width={50} alt='google'/>
                <div className='flex flex-col'>
                    <p className='flex items-center gap-x-1 text-green-600 font-semibold text-lg'><FaStar/>4.4/5</p>
                    <p className='text-base text-[#331083ff]'>Rated by users on <span className='text-blue-400 text-lg font-semibold'>Google</span> </p>
                </div>
            </div>
        </div>
        {/* cal  */}
        <div className="flex flex-col  items-center bg-[#f1d4f7] md:w-[60%] w-[95%] mx-auto  mt-12 p-8 rounded-2xl">
      <p className="w-[80%] text-base text-[#3e1953] font-[300]  text-center mx-auto">Unlock the Best Deals: Dive into Savings! Explore, Inquire, and Meet for Tailored Pricing and Product Details – Your Gateway to Exceptional Value Interested to explore Xoidz ? Feel free to schedule a meet!</p>
      <Button className="bg-[#311b66]  text-white text-sm mt-4 hover:scale-110 duration-200 ease-in-out transition-all hover:bg-[#311b66]/80" onClick={()=>window.open('https://cal.com/shobhnik13')}>Schedule a meet / cal.com</Button>
    </div>
   
    </div>
  )
}

export default UserSection
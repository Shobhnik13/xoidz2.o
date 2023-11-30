'use client'

import Image from 'next/image';
import CountUp from 'react-countup';
import { FaStar } from "react-icons/fa";
const UserSection = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 sm:mt-56 md:mt-52 lg:mt-56 mx-4 md:mx-4 lg:mx-0">
        {/* running  */}
        <div className="text-[#3c305aff] hidden sm:block text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp duration={20} className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
        </div>
        {/* for mobiles   */}
        <div className="text-[#3c305aff] block w-[300px] mt-36 sm:hidden text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp duration={20} className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
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
    </div>
  )
}

export default UserSection
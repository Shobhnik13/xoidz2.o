'use client'

import CountUp from 'react-countup';
const UserSection = () => {
  return (
    <div className="flex flex-col items-center justify-center  sm:mt-40 md:mt-52 lg:mt-56 mx-4 md:mx-4 lg:mx-0">
        {/* running  */}
        <div className="text-[#3c305aff] hidden sm:block text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
        </div>
        {/* for mobiles   */}
        <div className="text-[#3c305aff] block w-[300px] mt-36 sm:hidden text-center text-base md:text-xl font-semibold p-2 rounded-2xl border shadow-md">
            <p>Trusted by  <CountUp className='text-xl md:text-3xl font-extrabold text-green-600' start={0} end={100}></CountUp><span className='text-xl md:text-3xl font-extrabold text-green-600'>+</span> businesses to scale outbound sales and drive new revenue</p>
        </div>
        
        {/* ratings  */}
        <div >

        </div>
    </div>
  )
}

export default UserSection
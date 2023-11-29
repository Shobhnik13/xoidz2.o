import Navbar from '@/components/Navbar'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='h-screen w-[99%] rounded-[70px] mt-2 m-auto bg-gradient-to-r from-[#ddd8ffff] via-[#f1ecff] to-[#f4faff]'>
      <Navbar/>
    </div>
  )
}

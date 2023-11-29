import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='h-[42vh] sm:h-[55vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] 2xl:h-[85vh] w-full md:w-[99%] rounded-[20px] mt-2 m-auto bg-gradient-to-r from-[#ddd8ffff] via-[#f1ecff] to-[#f4faff]'>
    <Navbar />
    <Hero />
</div>

  )
}

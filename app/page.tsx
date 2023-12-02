import CarouselComp from '@/components/CarouselComp'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import UserSection from '@/components/UserSection'
import Image from 'next/image'
export default function Home() {
  return (
    <div className='h-screen md:w-[99%] m-auto '>
    {/* <Navbar /> */}
    <Hero />
    <UserSection/>
    <Features/>
    <CarouselComp/>
</div>

  )
}

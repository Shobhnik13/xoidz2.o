'use client'
import { Footer } from 'flowbite-react';
import Image from 'next/image';
const FooterComp = () => {
  return (
    <Footer container>
    <div className=" text-center mt-16 flex flex-col items-center justify-center w-full">
      <div className=" w-[100vw] md:w-full flex flex-col md:flex-row md:gap-x-4 items-center justify-between ">
       <Image src={'/xoidz.png'} alt='image' width={100} height={100}/>
        <Footer.LinkGroup className='gap-x-4 flex flex-col mb-2 gap-y-2 md:flex-row text-purple-900/100'>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright className='mt-2  flex gap-x-1 justify-center md:text-base font-bold text-purple-900/100' href="#" by="Xoidz™" year={2023} />
    </div>
  </Footer>

  )
}

export default FooterComp
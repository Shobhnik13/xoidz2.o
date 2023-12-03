'use client'

import Image from "next/image";
import { Component } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaUserCheck } from "react-icons/fa6";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
const CarouselComp = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1200,
    cssEase: "linear",
    // centerPadding: "60px"
    pauseOnHover: true,
  };
  const settingsForMobs={
    dots: false,
    infinite: true,
    slidesToShow:1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 1200,
    cssEase: "linear",
    // centerPadding: "60px"
    pauseOnHover: true,
  }
  const data=[
    {
      id:1,
      title:'asasasasas',
      subTitle:'dsjd sjh djshd jshdjs hdjshd jsh djh sjdh sdsh jdgshjdg shgddd dddd dd dddddd ddd dddd dddd dd dddhsg dshg dhsgd hsgdhsg',
      rating:'4.2',
    },
    {
      id:2,
      title:'asasasasas',
      subTitle:'dsjd sjh djshd jshdjs hdjshd jsh djh sjdh sdsh jdgshjdg shgddd dddd dd dddddd ddd dddd dddd dd dddhsg dshg dhsgd hsgdhsg',
      rating:'4.5',
    },
    {
      id:3,
      title:'asasasasas',
      subTitle:'dsjd sjh djshd jshdjs hdjshd jsh djh sjdh sdsh jdgshjdg shgddd dddd dd dddddd ddd dddd dddd dd dddhsg dshg dhsgd hsgdhsg',
      rating:'4.1',
    },
    {
      id:4,
      title:'asasasasas',
      subTitle:'dsjd sjh djshd jshdjs hdjshd jsh djh sjdh sdsh jdgshjdg shgddd dddd dd dddddd ddd dddd dddd dd dddhsg dshg dhsgd hsgdhsg',
      rating:'3.9',
    }
  ]
  return (
    <div className="flex flex-col md:mt-16 overflow-x-hidden pb-12 p-8">
      <span className={`mx-4 md:mx-auto text-center text-[#3e1953] text-sm md:text-base w-[90%] md:w-auto  font-semibold mt-16 bg-white border border-1 shadow-md border-gray-200 rounded-3xl px-4 py-2  gap-x-2 flex justify-center items-center italic`}>
        <span className="text-xl"><FaUserCheck/></span>
        <span>Your Story, Our Success: Shape the Legacy of Xoidz with Reviews.</span>
       </span>
         <div className="mt-8">
          {/* slider for laps  */}
          <div className={`hidden md:block`}>
        <Slider {...settings} >
          {/* <div> */}
            {data.map((item)=>(
              // <div className="">
                <Card key={item.id} className="shadow-md rounded-2xl mt-4 mb-4 p-3 cursor-pointer bg-white hover:scale-105 ease-in-out transition-all duration-200">
                  <div className="flex gap-x-4 text-[#0a254d] items-center justify-center">
                    <Image alt="user_img" src={'/google.png'} width={40} height={8} className=" rounded-max"/>
                <CardHeader>
                  <CardTitle className="text-lg capitalize">{item.title}</CardTitle>
                </CardHeader>
                </div>
                  <CardContent className="mt-3 text-sm text-center text-gray-400 italic">
                    <p>&quot;{item.subTitle}&quot;</p>
                  </CardContent>
              <CardFooter className="text-lg text-[#fdca28] font-semibold flex justify-center items-center gap-x-2">
                  <Image src={'/star.png'} alt="star_img" width={30} height={30}/>Rated at {item.rating}/5
              </CardFooter>
              </Card>    
            // </div>
            ))}
          {/* </div> */}
        </Slider>

        {/* slider for mobs  */}
        </div>
        <div className="block md:hidden">
        <Slider  {...settingsForMobs}>
          {/* <div> */}
            {data.map((item)=>(
              // <div className="">
                <Card key={item.id} className="shadow-md rounded-2xl mt-4 mb-4 p-3 cursor-pointer bg-white hover:scale-105 ease-in-out transition-all duration-200">
                  <div className="flex gap-x-4 text-[#0a254d] items-center justify-center">
                    <Image alt="user_img" src={'/google.png'} width={40} height={8} className=" rounded-max"/>
                <CardHeader>
                  <CardTitle className="text-lg capitalize">{item.title}</CardTitle>
                </CardHeader>
                </div>
                  <CardContent className="mt-3 text-sm text-center text-gray-400 italic">
                    <p>&quot;{item.subTitle}&quot;</p>
                  </CardContent>
              <CardFooter className="text-lg text-[#fdca28] font-semibold flex justify-center items-center gap-x-2">
                  <Image src={'/star.png'} alt="star_img" width={30} height={30}/>Rated at {item.rating}/5
              </CardFooter>
              </Card>    
            // </div>
            ))}
          {/* </div> */}

        </Slider>
        </div>
      </div>
    </div>
  )
}

export default CarouselComp
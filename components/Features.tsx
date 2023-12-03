'use client'

import Image from "next/image"
import { FaWhatsapp } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { IoRocketSharp } from "react-icons/io5";
const Features = () => {
    const data=[
        {
            id:1,
            title:'Advance Analytics',
            spanText:'95% Accuracy with our data',
            subTitle:'Deep-Dive into advance analytics to understand Sales, Order, CAC and ROAS Trends.Identify from which part of india you are getting sales, Repeat %, COD and moreKeep track of every data point even when info streams from multiple sources at once.',
            imgSrc:'/img1.png',
            bgColor:'bg-[#fdecf3]',
            icon:<IoMdEye/>,
            txtColor:'text-[#3e1953]'
        },
        {
            id:2,
            title:'Add & Track Easily',
            spanText:'Manage your business through WhatsApp',
            subTitle:'Easily track your invoices by emailing or forwarding them on Whatsapp. Manage all your physical and digital invoices in one dashboard by dragging and dropping, uploading or just whatsapping them',
            imgSrc:'/img2.png',
            bgColor:'bg-[#eaf8fb]',
            icon:<FaWhatsapp/>,
            txtColor:'text-[#0a254d]',
        },
        {
            id:3,
            title:'Understand your overall business summary with our Report cards.',
            spanText:'7 AM Report Card',
            subTitle:'Get report card delivered everyday at 7 AM on your Whatsapp, Email.Request report cards like Daily Performance, Monthly Performance, Sales Performance, Marketing Performance, Google Analytics Performance 24*7 Set your sales target and measure whether you are achieving your goals or not.',
            imgSrc:'/img3.png',
            bgColor:'bg-[#ffebf4]',
            icon:<TbReportAnalytics/>,
            txtColor:'text-[#3e1953]',
        },
    ]
  return (
    <div className="mt-28 flex flex-col">
        
        <span className={`mx-4 md:mx-auto text-center text-[#3e1953] text-sm md:text-base w-[90%] md:w-auto  font-semibold mt-16 bg-white border border-1 shadow-md border-gray-200 rounded-3xl px-4 py-2 flex gap-x-2 justify-center items-center`}>
           <span className="text-xl"> <IoRocketSharp/></span> 
           <span>Features Perfected: Elevate Your Business Beyond Boundaries!</span>
        </span>
        <div className="mt-14">
        {data.map((item)=>(
            <div key={item.id} className={`w-[99%] p-4 mx-2 rounded-[20px]  ${item.bgColor} h-auto flex flex-col mt-1 justify-center items-center`}>
                <Image alt="feature1" src={`${item.imgSrc}`} width={500} height={500} />
                <span className={`${item.txtColor}  w-[95%] md:w-auto font-semibold mt-16 bg-white border border-1 shadow-md border-gray-200 rounded-3xl px-4 py-2 flex gap-x-2 justify-center items-center`}>
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.spanText}</span>
                </span>
                <h1 className={`mt-20 ${item.txtColor} text-4xl w-[70%] text-center font-[600] `}>{item.title}</h1>
                <p className={`mt-8 text-md font-[450] w-[80%] text-center ${item.txtColor}`}>{item.subTitle}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Features
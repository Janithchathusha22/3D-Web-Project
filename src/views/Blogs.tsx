/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { CanvasRevealEffectDemo3 } from '@/components/'
import { BentoGridSecondDemo } from '@/components/BlogsGrid'
import { ScrollToTop } from '@/components/ScrollToTop'
import { CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import { CalendarDaysIcon, ClockIcon, Newspaper, RocketIcon } from 'lucide-react';
import bannerOne from "../assets/blogs/banner_1.jpg"
import bannerTwo from "../assets/blogs/banner_2.jpg"
import bannerThr from "../assets/blogs/banner_3.jpg"
import three from "../assets/team/3.jpeg";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import WhatsappChat from '@/components/ui/WhatsappChat';


export default function Blogs() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    const blogsLists = [
        {
            image: bannerOne,
            title: "The Untold Power of Your Value Proposition",
            des: "In the crowded marketplace of today, simply having a great product or service isn't enough. You need a clear and compelling message ...",
            url: '/the-untold-power-of-your-value-proposition',
            author: "Eshan Dias",
            profilepic: "https://media.licdn.com/dms/image/D5603AQHJIWqV8vjJFw/profile-displayphoto-shrink_800_800/0/1707336577020?e=1717632000&v=beta&t=y2AkVPN8SpaB-eH5ybAcPWo1A2zRLnSo053JHlKgU5o",
            date: "April 2",
            time: "5 in read",

        },
        {
            image: bannerTwo,
            title: "Unveiling Your Brand's Soul",
            des: "In today's digital age, attention spans are shorter than ever.  When someone encounters your brand, ...",
            url: '/unveiling-your-brand-s-soul',
            author: "Eshan Dias",
            profilepic: "https://media.licdn.com/dms/image/D5603AQHJIWqV8vjJFw/profile-displayphoto-shrink_800_800/0/1707336577020?e=1717632000&v=beta&t=y2AkVPN8SpaB-eH5ybAcPWo1A2zRLnSo053JHlKgU5o",
            date: "Mar 15",
            time: "5 in read",

        },
        {
            image: bannerThr,
            title: "Website Analytics 101",
            des: "Your website is a powerful tool for connecting with your audience, promoting your brand, and driving business growth. ...",
            url: '/website-analytics',
            author: "Shivantha Rodrigo",
            profilepic: three,
            date: "Mar 10",
            time: "3 in read",

        },


    ];

    return (
        <>
            <Helmet>
                <title>MetroQubix | Blogs </title>
                <meta
                    name="description"
                    content="Connecting Insights for Unparalleled Outcomes."
                    data-react-helmet="true"
                />
                <meta
                    name="keywords"
                    content=""
                    data-react-helmet="true"
                />
                <link
                    rel="canonical"
                    href=""
                    data-react-helmet="true"
                />
                <link rel="icon" href="/favicon.ico" />
                
            </Helmet>
            <Navbar />
            <div className='container h-[350px] mt-24 lg:mt-0'>
                <div className='flex flex-col items-center justify-center text-center h-full gap-3' >
                    <h1 className='font-bold text-5xl bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text leading-relaxed'>Blogs</h1>
                    <p className='w-full lg:w-2/3'>Welcome to the MetroQubix blog, where we bridge the gap between marketing tactics and authentic connections.  In a world saturated with digital noise, we believe in fostering meaningful interactions that drive results.  Our blog is your gateway to uncovering the power of "connecting beyond the dots</p>
                </div>
            </div>
            <div className='container flex flex-col py-10 gap-5' >
                <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
                        Latest {" "}
                    </span>
                    Blog
                </h2>
                <div className='w-full group flex flex-col lg:flex-row gap-5 bg-muted/50 p-5 rounded-lg'  >
                    <div className='lg:w-2/3 w-full'>
                        <div className='overflow-hidden rounded-lg'>
                            <img src={bannerOne} alt="" className='transition-all duration-300 group-hover:scale-105' />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <p className='font-extrabold text-2xl'>
                                The Untold Power of Your Value Proposition
                            </p>
                            <p className='font-sans font-normal text-lg'>
                                In the crowded marketplace of today, simply having a great product or service isn't enough. You need a clear and compelling message ...
                            </p>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='w-10 h-10 overflow-hidden'><img src={'https://media.licdn.com/dms/image/D5603AQHJIWqV8vjJFw/profile-displayphoto-shrink_800_800/0/1707336577020?e=1717632000&v=beta&t=y2AkVPN8SpaB-eH5ybAcPWo1A2zRLnSo053JHlKgU5o'} alt="" className='w-10 rounded-full' /></div>
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <p className='font-extralight leading-4'>Eshan Dais</p>
                                <div className='flex flex-row gap-5 p-0 h-4 '>
                                    <div className='flex flex-row items-center gap-1'><CalendarDaysIcon className='w-3' /><p className='font-thin text-xs leading-3'>April 2</p></div>
                                    <div className='flex flex-row items-center gap-1'><ClockIcon className='w-3' /><p className='font-thin  text-xs leading-3'>07 in read</p></div>
                                </div>
                            </div>
                        </div>
                        <Link to="/the-untold-power-of-your-value-proposition" className='group flex w-36  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-xs uppercase font-medium  shadow-md rounded-full py-2 px-4'>
                            <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                                <div className="col-span-1">

                                    <Newspaper className="w-5 transition-all duration-300 group-hover:translate-x-3 " />

                                </div>
                                <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Read more</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container pb-20 border-t-2 py-10">

                <div className='flex flex-wrap justify-center  gap-5'>
                    {blogsLists.map(
                        (blogsList, index) => (
                            <Link  className="w-96 border-[2px] bg-muted/50 p-3 hover:bg-muted rounded-lg group flex flex-col  justify-start gap-5" key={index} to={blogsList.url} >
                                <div className='overflow-hidden rounded-lg'><img src={blogsList.image} alt="" className='transition-all duration-300 group-hover:scale-105' /></div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-extrabold'> {blogsList.title}</p>
                                    <p className='font-sans font-normal'>{blogsList.des}</p>
                                </div>
                                <div className='flex flex-row gap-3 items-center'>
                                    <div className='w-10 h-10 overflow-hidden'><img src={blogsList.profilepic} alt="" className='w-10 rounded-full' /></div>
                                    <div className='flex flex-col items-start justify-center gap-1'>
                                        <p className='font-extralight leading-4'>{blogsList.author}</p>
                                        <div className='flex flex-row gap-5 p-0 h-4 '>
                                            <div className='flex flex-row items-center gap-1'><CalendarDaysIcon className='w-3' /><p className='font-thin text-xs leading-3'>{blogsList.date}</p></div>
                                            <div className='flex flex-row items-center gap-1'><ClockIcon className='w-3' /><p className='font-thin  text-xs leading-3'>{blogsList.time}</p></div>
                                        </div>
                                    </div>
                                </div>

                                {/* <Link to="/contact-us" className='group flex w-36  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-xs uppercase font-medium  shadow-md rounded-full py-2 px-4'>
                                    <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                                        <div className="col-span-1">

                                            <Newspaper className="w-5 transition-all duration-300 group-hover:translate-x-3 " />

                                        </div>
                                        <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Read more</div>
                                    </div>
                                </Link> */}
                            </Link>
                        )
                    )}

                </div>

            </div>
            <Footer />
            <WhatsappChat />

        </>
    )
}

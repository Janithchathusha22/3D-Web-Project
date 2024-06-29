import React, { useRef, useState } from 'react'
import image from "../assets/careers.webp";
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import {
    AnimatePresence,
    motion,
} from "framer-motion";
import { CalendarDaysIcon, SendIcon } from 'lucide-react';
import LoaderIcon from "react-loader-icon";
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import WhatsappChat from '@/components/ui/WhatsappChat';
import  './car.css';


export default function Careers() {
    const [result, setResult] = React.useState("");
    const [showComponent, setShowComponent] = useState(false);
    const [sendMail, setsendMail] = useState(false);
    const [sendMassage, setsendMassage] = useState(false);
    const [sendErrorMassage, setsendErrorMassage] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const jobs = [
        {
            name: "Trainee Digital Marketing Associate",
            time: "Full-Time",
            location: "Hybrid",
            exp: "6 Months",
            tag: [
                "Problem-Solving"," Time Management"," Collaboration","Adaptability"
            ]
        },
        {
            name: "Content Writer",
            time: "Full-Time / Part-Time",
            location: "Hybrid",
            exp: "1 Year",
            tag: [
                 "Research and Learning", "Creativity and Innovation", "Communication", "Collaboration"
            ]
        },
       
        {
            name: "Graphic Designer",
            time: "Full-Time / Part-Time",
            location: "Hybrid",
            exp: "2 Years",
            tag: [
               "Conceptual Thinking", "Creativity", "Visual Communication", "Time Management"
            ]
        },
        {
            name: "Digital Marketing Intern",
            time: "Full-Time",
            location: "Hybrid",
            exp: "No experience necessary!",
            tag: [
                 "Problem-Solving", "Time Management", "Collaboration", "Adaptability"
            ]
        },


    ]
    return (
        <>
            <Helmet>
                <title>MetroQubix | Careers</title>
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
            <div className='container h-screen flex flex-col-reverse lg:flex-row items-center justify-center '>
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center" 
                 >
                    <AnimatePresence>
                        <motion.div
                            initial={{
                                y: -10,

                            }}
                            animate={{
                                y: 10,

                            }}
                            transition={{
                                ease: "linear",
                                duration: 5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                        >
                            <img src={image} alt="" className='w-[250px] lg:w-[450px] ' /></motion.div></AnimatePresence>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-3" 
                 >
                    <h1 className='font-bold text-5xl bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text leading-relaxed'>Careers</h1>
                    <p className='font-semibold text-2xl'>Join, learn and perform</p>
                    <p className='lg:text-left text-center'>We are the hottest thing around and we want to strap on the metaphorical rockets on your career. If you believe in the joy of hard work, look forward to higher pay scales and want to be part of a fun workplace too, your dream career starts here.</p>
                </div>
            </div>
            <div className='container flex flex-col items-center justify-center  py-10 gap-5'>
                <h2 className="text-3xl md:text-4xl font-bold">
                    We are {" "}
                    <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
                        Open{" "}
                    </span>
                    for you
                </h2>

                <div className='w-full flex flex-row items-center justify-center '>
                    <div id="rooster"></div>
                    <div className="w-full lg:w-5/6 ">
                        <div className="w-full flex flex-col items-center justify-center py-20 gap-5">
                            {jobs.map(
                                (job, index) => (
                                    <div className=" bg-muted/50 relative  flex flex-col justify-center items-center group bg-gradient-to-r from-[#71affffb]  to-[#00ff80] p-[1px] rounded-xl w-full " key={index} >
                                        <div className='flex flex-col gap-5 lg:flex-row items-center justify-between w-full bg-muted rounded-xl px-4 lg:px-8 py-4'>
                                            <div>
                                                <div className='flex flex-col gap-2'>
                                                    <p className='font-semibold text-xl'> {job.name}</p>
                                                    <div className='flex flex-wrap items-start justify-start gap-3'>
                                                        {job.tag.map((tag, tagIndex) => (
                                                            <span key={tagIndex} className='bg-neutral-600 px-4 py-1 rounded-full border-[1px] text-xs'>{tag}{tagIndex !== job.tag.length - 1 && ' '}</span>
                                                        ))}
                                                    </div>
                                                    <p className='font-sans font-normal'>{job.time}</p>
                                                    <p className='font-thin text-xs leading-3'>Experince : {job.exp}</p>
                                                    <div className='flex flex-row gap-5 p-0 h-4 '>
                                                        <div className='flex flex-row items-center gap-1'><CalendarDaysIcon className='w-3' /><p className='font-thin text-xs leading-3'>{job.location}</p></div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@metroqubix.com&subject=Your%20Subject%20Here"
                                                    target="_blank"
                                                    type="submit" className='cursor-pointer group flex w-52  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-base uppercase font-normal  shadow-md rounded-full py-2 px-4'>
                                                    <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                                                        <div className="col-span-1">

                                                            <SendIcon className="w-10 transition-all duration-300 group-hover:translate-x-3 " />

                                                        </div>
                                                        <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Apply now</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>


                                    </div>
                                )
                            )}
                            {/* <form 
                                className="w-full max-w-lg bg-muted/50 shadow-md px-8 pt-8 pb-8  border-2 rounded-xl"  >
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"


                                        className="bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm  focus:outline-none focus:shadow-outline"
                                        required
                                        placeholder='Name'
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"


                                        className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
                                        required
                                        placeholder='Email'
                                    />
                                </div>

                                <div className="mb-2">
                                    <input
                                        placeholder='Mobile Number'
                                        type="tel"
                                        name="mobileNumber"
                                        id="mobileNumber"

                                        className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-2">
                                    <select
                                        name="jobrole"
                                        id="jobrole"
                                        className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
                                        required
                                    >
                                        <option className="text-TextDark">
                                            - Select Job Role -
                                        </option>
                                        <option className="text-TextDark" value="Software Engineer - Front-End">
                                            Software Engineer - Front-End
                                        </option>
                                        <option className="text-TextDark" value="Software Engineer - Front-End">
                                            Software Engineer - Back-End
                                        </option>
                                        <option className="text-darkBlack" value="Digital Marketer">
                                            Digital Marketer
                                        </option>
                                        <option className="text-darkBlack" value="Grapigh Designer">
                                            Grapigh Designer
                                        </option>

                                    </select>
                                </div>
                                <div className="mb-2">
                                    <input
                                        placeholder=''
                                        type="file"
                                        name="attachment"
                                        id="attachment"

                                        className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <textarea
                                        placeholder='Cover Letter'
                                        name="note"
                                        id="note"


                                        className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline h-32"
                                    ></textarea>
                                </div>
                                <div className="flex flex-col items-start justify-between">
                                    <div className="flex flex-col">
                                        <div>
                                            {sendMail ? (

                                                <button
                                                    type="submit" className='group flex w-40  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-base uppercase font-semibold  shadow-md rounded-full py-2 px-4'>
                                                    <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                                                        <div className="col-span-1">

                                                            <div className="w-5 h-5 text-white">
                                                                <LoaderIcon
                                                                    type={"bars"}
                                                                    color={"white"}
                                                                    size={25}
                                                                />
                                                            </div>

                                                        </div>
                                                        <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Sending</div>
                                                    </div>
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit" className='group flex w-40  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-base uppercase font-semibold  shadow-md rounded-full py-2 px-4'>
                                                    <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                                                        <div className="col-span-1">

                                                            <SendIcon className="w-10 transition-all duration-300 group-hover:translate-x-3 " />

                                                        </div>
                                                        <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Send us</div>
                                                    </div>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    <span>{result}</span>
                                    
                                </div>
                            </form> */}
                        </div>
                    </div>

                </div>
            </div>
            <WhatsappChat />
            <Footer />

        </>
    )
}

import React, { useRef, useState } from 'react';

import image from "../assets/contactusimage.webp";
import { SendIcon } from 'lucide-react';
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import LoaderIcon from "react-loader-icon";
import { Navbar } from '@/components/Navbar';
import WhatsappChat from '@/components/ui/WhatsappChat';
import { Footer } from '@/components/Footer';
import { AnimatePresence, motion } from "framer-motion";


export default function ContactUs() {
  const [showComponent, setShowComponent] = useState(false);
  const [sendMail, setsendMail] = useState(false);
  const [sendMassage, setsendMassage] = useState(false);
  const [sendErrorMassage, setsendErrorMassage] = useState(false);
  
  const form = useRef();
  function isEmail(val) {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return true;
    }
  }
  function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return re.test(input_str);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    console.log("hello");

    if (
      form.current.name.value === null &&
      form.current.email.value === null &&
      form.current.companyName.value === null &&
      form.current.mobileNumber.value === null &&
      form.current.note.value === null
    ) {
      setsendErrorMassage(true);
    } else {
      console.log("runing");
      setsendMail(true);
      const formData = new FormData(event.target);

      formData.append("access_key", "d8ae13f4-27a4-4d9b-8b46-922cd469e60f");
      formData.append("subject", "New Submission For Metroqubix Contact US form");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        // console.log(result);
        setsendMassage(true);
        setsendErrorMassage(false);
        setsendMail(false);
        form.current.name.value = "";
        form.current.companyName.value = "";
        form.current.email.value = "";
        form.current.mobileNumber.value = "";
        form.current.note.value = "";
      } else {
        sendMassage(false);
        setsendErrorMassage(true);
        setsendMail(false);
        form.current.name.value = "";
        form.current.companyName.value = "";
        form.current.email.value = "";
        form.current.mobileNumber.value = "";
        form.current.note.value = "";
      }
    }
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <Helmet>
        <title>MetroQubix | Contact Us</title>
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
      <div className="container py-20 lg:h-screen flex flex-col lg:flex-row items-center justify-center gap-5 mt-20 lg:mt-0">
        <div className="lg:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {" "}
            <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
              Contact{" "}
            </span>
            Us
          </h2>
          <h1 className='text-base font-medium '>
            Let's spark a conversation! We're just a click away. Reach out and see how MetroQubix can connect your brand.
          </h1>
          <AnimatePresence>
              <motion.div
                initial={{
                  y: -15,
                 
                }}
                animate={{
                  y:15,
                 
                }}
                transition={{
                  ease: "linear",
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className='flex flex-row items-center justify-center w-full py-5'
              ><img src={image} alt="" className='w-[350px] -ml-2' /></motion.div>  </AnimatePresence>
          
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center gap-5">
          
          <form ref={form}
            onSubmit={handleSubmit} className="w-full max-w-lg bg-muted/50 shadow-md px-8 pt-8 pb-8  border-2 rounded-xl">
            <div className="mb-2">
              {/* <label htmlFor="name" className="block bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-sm font-bold mb-2">
            Name:
          </label> */}
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
              {/* <label htmlFor="email" className="block bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-sm font-bold mb-2">
            Email:
          </label> */}
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
              {/* <label htmlFor="companyName" className="block bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-sm font-bold mb-2">
            Company Name:
          </label> */}
              <input
                type="text"
                name="companyName"
                id="companyName"


                placeholder='Company Name'
                className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-2">
              {/* <label htmlFor="mobileNumber" className="block bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-sm font-bold mb-2">
            Mobile Number:
          </label> */}
              <input
                placeholder='Mobile Number'
                type="tel"
                name="mobileNumber"
                id="mobileNumber"

                className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              {/* <label htmlFor="note" className="block bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text text-sm font-bold mb-2">
            Note:
          </label> */}
              <textarea
                placeholder='Note here'
                name="note"
                id="note"


                className=" bg-muted/50 appearance-none border rounded w-full py-2 px-3  leading-tight text-sm focus:outline-none focus:shadow-outline h-32"
              ></textarea>
            </div>
            <div className="flex flex-col items-start justify-between">
              {/* <button
              type="submit"
              className="bg-[#55CC87] hover:bg-blue-700 text-white font-bold py-2 px-4 transition-all duration-300 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button> */}
              {/* <button
                type="submit" className='group flex w-40  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-base uppercase font-semibold  shadow-md rounded-full py-2 px-4'>
                <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                  <div className="col-span-1">

                    <SendIcon className="w-10 transition-all duration-300 group-hover:translate-x-3 " />

                  </div>
                  <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Send us</div>
                </div>
              </button> */}
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
              <div className="flex flex-col mt-5">
                {sendMassage && (
                  <h3 className="bg-green50 py-1 px-3 text-white border-l-2 text-xs border-l-green bg-green-500 rounded-full ">
                    Email has been sent successfully. Thank You!
                  </h3>
                )}
                {sendErrorMassage && (
                  <h3 className="bg-pink50 p-3 text-white border-l-2 text-xs border-l-pink bg-red-400">
                    Please fill the form again. Thank You!
                  </h3>
                )}
              </div>
            </div>
          </form>
          <h6 className='text-base font-normal italic w-4/6 text-center'>
            * Fill in the information above, and we’ll get in touch with you as soon as we can. *
            {/*  */}
          </h6>
        </div>

      </div>
      <WhatsappChat />
      <Footer />
    </>
  );
}


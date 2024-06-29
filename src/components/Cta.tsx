import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { RocketIcon } from "lucide-react";
import cta from "../assets/cta.webp"
import ctaO from "../assets/ctaO.webp"
import { AnimatePresence, motion } from "framer-motion";


export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-20 my-24 sm:my-32 group"
      
    >
      <div className="container flex flex-col lg:flex-row  items-center justify-center gap-5">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start gap-5 justify-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-relaxed text-center lg:text-left">
            Let's discuss how we can make your

            <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
              {" "}
              project a success!
            </span>

          </h2>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@metroqubix.com&subject=Your%20Subject%20Here"
            target="_blank"
            rel=""
            className="font-PlusJok font-medium text-base text-darkBlack dark:text-white underline"
          >
            info@metroqubix.com
          </a>
          <Link to="/contact-us" className='group flex w-48  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-xl uppercase font-semibold  shadow-md rounded-full py-2 px-4'>
            <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
              <div className="col-span-1">

                <RocketIcon className="w-10 transition-all duration-300 group-hover:translate-x-3 " />

              </div>
              <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Let's Talk</div>
            </div>
          </Link>
        </div>
        <div className="lg:w-1/2 hidden flex-row items-center justify-center transition-all duration-500 lg:group-hover:scale-125 lg:flex ">
         
          <AnimatePresence>
            <motion.div
              initial={{
                y: -20,

              }}
              animate={{
                y: 20,

              }}
              transition={{
                ease: "linear",
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className=" "
            >
            <img src={ctaO} alt=""  className=" -translate-y-16" />
            </motion.div>
          </AnimatePresence>
        </div>



      </div>
    </section>
  );
};

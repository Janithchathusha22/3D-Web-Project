import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.webp";


export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 z-10 group sm:pl-0 " 
     
    >
      <div className="bg-muted/50  rounded-lg py-12 border-2" >
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12"  >
          <img
            src={pilot}
            alt=""
            className="w-[250px] object-contain rounded-lg translate-y-12 scale-150 group-hover:-translate-y-1 transition-all duration-300 group-hover:w-[280px]"

          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4 dark:text-white text-black">
                At MetroQubix, we're passionate about the power of meaningful connections. We believe that true marketing magic happens when you go beyond clicks and ignite genuine connections with your audience.
                <br /><br />
                We're not about empty metrics or fleeting trends. We're a results-driven digital marketing agency that crafts data-backed strategies to achieve your long-term business goals.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};

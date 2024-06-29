import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/target.webp";
import O from "../assets/steps/1.webp";
import T from "../assets/steps/2.webp";
import Th from "../assets/steps/3.webp";
import Fo from "../assets/steps/4.webp";
import Fi from "../assets/steps/5.webp";
import Si from "../assets/steps/6.webp";
import Se from "../assets/steps/7.webp";




export const Services = () => {
  const serviceLists = [
    {
      title: "Deep Understand about Business & Objectives.",
      description:
        "",
      image: O,
      step: "Step 01"
    },
    {
      title: " Conduct industry Research.",
      description:
        "",
      image: T,
      step: "Step 02"
    },
    {
      title: "Understanding the Customer Personas.",
      description:
        "",
      image: Th,
      step: "Step 03"
    },
    {
      title: " Journey Mapping with Emotional Touchpoints.",
      description:
        "",
      image: Fo,
      step: "Step 04"
    },
    {
      title: " Planning Digital & Communication Strategy.",
      description:
        "",
      image: Fi,
      step: "Step 05"
    },
    {
      title: "Multi-Channel Usage.",
      description:
        "",
      image: Si,
      step: "Step 06"
    },
    {
      title: "Setting KPIs & Execution.",
      description:
        "",
      image: Se,
      step: "Step 07"
    },

  ];
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid  gap-8 place-items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our {" "}
            <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
              Approach{" "}
            </span>

          </h2>
          <p className="mt-4 mb-10 text-xl text-muted-foreground lg:text-left text-center">   We craft a data-driven strategy that connects the beyond the dots to achieve your marketing goals.</p>
       
          <div className="container flex flex-col items-center justify-center gap-10">
            <div className="w-full">
              <div className="flex flex-wrap items-center justify-center flex-row gap-16">
                {serviceLists.map(
                  (serviceList, index) => (
                    <div key={index} className="group flex flex-row  gap-5 w-full lg:w-[600px] rounded-lg bg-muted/50 bg-gradient-to-r from-[#71affffb]  to-[#00ff80] p-[1px] lg:h-[130px]"
                      
                     
                      >
                      <div className="bg-muted flex flex-col lg:flex-row lg:items-center w-full rounded-lg gap-3 pl-5">
                        <div className="bg-muted/50 w-[100px] h-[100px] p-1 flex flex-col items-center justify-center rounded-full">
                          <img src={serviceList.image} alt="" className="group-hover:-translate-x-8 group-hover:scale-150 transition-all duration-300" />
                        </div>
                        <div className="w-full flex flex-col items-start justify-center gap-3 pl-5 lg:p-0">
                          <h2 className="bg-black text-white rounded-full text-sm w-fit px-6 py-2 border-[1px]">
                            {serviceList.step}
                          </h2>

                          <p className="text-xl mb-4">
                            {serviceList.title}
                          </p>
                        </div>
                      </div>

                    </div>

                  ))}
              </div>
            </div>
            {/* <div className="basis-1/3">
              <img
                src={cubeLeg}
                className=" lg:w-full object-contain"
                alt="About services"
                
              />
            </div> */}
          </div>

        </div>

      </div>


    </section>
  );
};

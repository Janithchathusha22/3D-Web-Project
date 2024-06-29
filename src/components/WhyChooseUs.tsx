/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.webp";
import image3 from "../assets/reflecting.webp";
import image4 from "../assets/whycoose.png";
import { BadgeCheckIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls, useGLTF } from "@react-three/drei";
import { LogoTd } from "./LogoTd";
import { useRef } from "react";
import NeuralNetwork from "./NeuralNetwork";


interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Holistic Approach & Proven Results",
    description:
      "We don't just generate clicks; we create cohesive marketing strategies that drive measurable results and long-term success. We take a big-picture view, ensuring all your marketing efforts work together seamlessly.",
    image: image,
  },
  {
    title: "Deep Industry Expertise & Tailored Solutions",
    description:
      "We understand the unique challenges and opportunities within your industry. We don't offer a one-size-fits-all approach. Instead, we craft customized solutions that resonate with your target audience and achieve your specific goals.",
    image: image3,
  },
  {
    title: "Data-Driven Decisions & Cutting-Edge Strategies",
    description:
      "We're not fans of guesswork. Every decision we make is backed by data analysis and insights. We constantly evolve our strategies, leveraging the latest digital marketing trends to keep you ahead of the curve.",
    image: image4,
  },
  {
    title: "Experienced Team & Passionate Partners    ",
    description:
      " Our team of experts has a proven track record of success in helping businesses achieve their marketing goals. We're passionate about what we do, and we become dedicated partners on your journey to digital marketing dominance.      ",
    image: image4,
  },
];

// const featureList: string[] = [
//   "Dark/Light theme",
//   "Reviews",
//   "Features",
//   "Pricing",
//   "Contact form",
//   "Our team",
//   "Responsive design",
//   "Newsletter",
//   "Minimalist",
// ];

export const WhyChooseUs = () => {
 
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8 flex flex-col items-center"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-center">

        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
          Why Choose
        </span>
        {" "}MetroQubix
      </h2>

      <p className=" text-xl text-muted-foreground font-medium text-center lg:w-2/3">
        In today's competitive digital landscape, you need a marketing partner who can deliver results. Here's why MetroQubix is the perfect fit for your business.

      </p>

      {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}
      <div className="flex flex-col lg:flex-row items-center justify-center py-7">
        <div className="basis-1/2 h-[550px]">

          <AnimatePresence>
              <motion.div
                initial={{
                  y: -10,
                 
                }}
                animate={{
                  y:10,
                 
                }}
                transition={{
                  ease: "linear",
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
               <img
            src={image4}
            alt="About feature"
            className=" lg:w-[500px] mx-auto"
            
          />
              </motion.div>
            </AnimatePresence>
          

        </div>
        <div className="basis-1/2 flex flex-col gap-4">
          <p className=" text-xl text-muted-foreground font-bold text-left from-accent-foreground">
            Reasons to Connect with MetroQubix
          </p>
          <div className="flex flex-col gap-4  lg:pl-10">
            {features.map(({ title, description, image }: FeatureProps) => (
              <Card key={title}  className="group flex flex-row items-center p-[1px]  bg-gradient-to-r from-[#71affffb]  to-[#00ff80] " >
                <div className="group flex flex-col lg:flex-row items-center bg-muted rounded-lg px-2 py-2">
                  <div className="w-28 h-20 flex flex-row items-center justify-center rounded-xl ">
                    <BadgeCheckIcon className="w-14 h-14 group-hover:text-emerald-500 transition-all duration-500" />
                  </div>
                  <div>
                    <CardHeader className=" flex flex-col items-start pt-2 pb-0 px-5 group-hover:translate-x-6 transition-all duration-300" >
                      <CardTitle className="text-xl font-bold group-hover:bg-gradient-to-b group-hover:from-primary/60 group-hover:to-primary group-hover:text-transparent group-hover:bg-clip-text  text-center  rounded-full lg:text-left">{title}</CardTitle>
                    </CardHeader>

                    <CardContent className="py-2 px-5 font-light text-sm text-justify">{description}</CardContent>
                  </div>
                </div>



                {/* <CardFooter>
                <img
                  src={image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto"
                  
                />
              </CardFooter> */}
              </Card>
            ))}
          </div>
        </div>
      </div>
      <p className=" text-xl text-muted-foreground text-center py-5">
        Your Trusted Partner for Digital Marketing Success
      </p>
    </section>
  );
};

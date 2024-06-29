import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";
import { useEffect } from "react";


import image from "../assets/sevices/1.webp";
import image1 from "../assets/sevices/2.webp";
import image2 from "../assets/sevices/3.webp";
import image3 from "../assets/sevices/4.webp";
import image4 from "../assets/sevices/5.webp";
import image5 from "../assets/sevices/6.webp";
import image6 from "../assets/sevices/7.webp";
import image7 from "../assets/sevices/8.webp";
import image8 from "../assets/sevices/9.webp";
import image9 from "../assets/sevices/10.webp";
import image10 from "../assets/sevices/11.webp";
import image11 from "../assets/sevices/12.webp";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: image,
    title: "Strategic Direction",
    description:
      "We guide your marketing journey with clear vision and data-driven strategies.",
  },
  {
    icon: image1,
    title: "Branding & Design",
    description:
      "We craft a strong and memorable identity that resonates with your audience.",
  },
  {
    icon: image2,
    title: "Product Marketing",
    description:
      "We get your product seen by the right people at the right time.",
  },
  {
    icon: image3,
    title: "Social Media Marketing",
    description:
      "We build and engage your online communities, sparking conversations and brand loyalty.",
  },
  {
    icon: image4,
    title: "Search Engine Optimization",
    description:
      "We optimize your website to rank higher in search results, driving organic traffic.",
  },
  {
    icon: image9,
    title: "Pay Per Click",
    description:
      "We elevate your online presence with targeted PPC ads, driving traffic directly to your website.",
  },
  {
    icon: image5,
    title: "Content Marketing",
    description:
      "We create compelling content that educates, inspires, and converts leads.",
  },
  {
    icon: image6,
    title: "Web Development",
    description:
      "We create compelling content that educates, inspires, and converts leads.",
  },

  {
    icon: image7,
    title: " UI/UX Design",
    description:
      "We design intuitive and visually appealing user experiences for websites and apps.",
  },
  {
    icon: image8,
    title: "Mobile Application Development",
    description:
      "We create powerful mobile apps that enhance customer engagement and brand interaction.",
  },
  {
    icon: image10,
    title: "Public Relations (PR)",
    description:
      "Help clients build brand awareness and positive reputation through strategic media outreach and influencer marketing.",
  },
  {
    icon: image11,
    title: "Advanced Analytics & Reporting",
    description:
      "Offer in-depth data analysis to understand customer behavior, campaign effectiveness, and identify optimization opportunities.",
  },
];

export const HowItWorks = () => {

  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Get Started with{" "}
        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
          Metroqubix Services{" "}
        </span>

      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our comprehensive suite of digital marketing services seamlessly connects the dots, creating a cohesive strategy that fuels brand growth and meaningful customer connections.
      </p>

      <div className="flex flex-wrap items-start justify-center gap-6 h-full">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className=" bg-muted/50 w-96 h-[450px] group flex flex-col items-center justify-center border-4 "
            
          >
            <CardHeader>
              <CardTitle className="grid transition-all duration-200 gap-4 leading-8 place-items-center group-hover:bg-gradient-to-b group-hover:from-primary/60 group-hover:to-primary group-hover:text-transparent group-hover:bg-clip-text">
                <div className="w-full flex flex-col items-center justify-center " >
                  <img src={icon} alt="" className="w-2/3 transition-all duration-500 group-hover:scale-125" />
                </div>

                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

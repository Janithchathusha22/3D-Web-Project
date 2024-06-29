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
import image4 from "../assets/studio.webp";


interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Metro Digital",
    description:
      "We craft data-driven digital marketing and brand building strategies, leveraging cutting-edge technology to empower your success. ",
    image: image,
  },
  {
    title: "Metro Labs",
    description:
      "Innovation is our playground, where we push the boundaries of web experiences, crafting every pixel to engage, surprise, and convert.",
    image: image3,
  },
  {
    title: "Metro Studios",
    description:
      "We redefine visual storytelling, pioneering bold design choices that challenge perceptions and propel your brand forward.",
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

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"

    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our Areas of {" "}
        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
          Expertise
        </span>
      </h2>

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}  className="group border-2" >
            <CardHeader className=" flex flex-col items-start group-hover:items-center transition-all duration-300">
              <CardTitle className="text-2xl font-bold text-sky-800  text-center bg-green-300 py-3 px-5 rounded-full">{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div className="w-full flex flex-col justify-center items-center" >
                <img
                  src={image}
                  alt="About feature"
                  className="w-[200px] lg:w-[300px] mx-auto transition-all duration-500 group-hover:scale-125"
                  
                />
              </div>

            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

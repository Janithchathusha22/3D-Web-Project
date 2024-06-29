import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}
import one from "../assets/ClientImg/1.jpeg";
import two from "../assets/ClientImg/2.jpeg";
import three from "../assets/ClientImg/3.jpeg";
import four from "../assets/ClientImg/4.jpeg";
import five from "../assets/ClientImg/5.jpeg";
import six from "../assets/ClientImg/6.jpeg";
import ScrollCarousel from "scroll-carousel-react";


const testimonials: TestimonialProps[] = [
  {
    image: four,
    name: "Francesco Greco",
    userName: "Managing Director @ Digital Oasis, FGreco Digital Consulting & FG",
    comment: "Seriously impressed by the creativity here! You guys are giving the digital marketing game a whole new level of awesome! 🙌",
  },
  {
    image: one,
    name: "Seminda Weerasinghe",
    userName: "Founder - Sonicsoft",
    comment:
      "Thanks to the MetroQubix Team, our business achieved outstanding acceleration! Their micro-level understanding of our needs and incredible solutions have brought amazing results to our brand. We highly recommend their services!",
  },

  {
    image: two,
    name: "Darshana Wanigasekara",
    userName: "Co-Founder - Flexiata",
    comment:
      "The team at Metroqubix is a game-changer! Their expertise, creativity, and innovative approach set them apart. They helped Flexiata dominate online, and we couldn't be happier. Top-notch digital marketing solutions, guaranteed.",
  },
  {
    image: three,
    name: "Lahiru Randeep",
    userName: "Founder LR Platinum/Racer",
    comment:
      "Their deep understanding of the digital landscape and their ability to leverage it for strategic growth have resulted in significant improvements in our business performance within just a few months.",
  },
  {
    image: five,
    name: "Sonia Babu",
    userName: "Head of Business partnerships | Reputed PVT Company",
    comment:
      "MetroQubix revamped our marketing strategy. Their in-depth audience insights led to a surge in qualified leads.Highly recommended for results-driven marketing!",
  },
  {
    image: six,
    name: "Sanodi Rajapakse",
    userName: "Brand Manager @ Link Natural Products (PVT)LTD",
    comment:
      "I had the pleasure of working closely with Eshan on digital marketing projects. He consistently demonstrated passion and enthusiasm, going above and beyond to achieve our business objectives. I highly recommend Eshan to potential clients or partners.",
  },


];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32 flex flex-col items-center "
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        What Our
        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
          {" "}
          Clients Say{" "}
        </span>

      </h2>
      <p className="text-base text-muted-foreground pb-8">
        Building meaningful connections with your audience is vital for success. See how we've helped our clients achieve incredible results.
      </p>

  
        <ScrollCarousel
          autoplay
          autoplaySpeed={10}
          smartSpeed={true}
          // speed={2}
          onReady={() => console.log("I am ready")}
          direction="ltr"
          className=""
        >
          {testimonials.map(
            ({ image, name, userName, comment }: TestimonialProps) => (
              <Card
                key={userName}
                className="overflow-hidden hover:-translate-y-2 group w-[500px] h-64"
                
              >
                
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="transition-all w-14 h-14 duration-300 group-hover:scale-125">
                    <img
                      alt=""
                      src={image}

                    />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <CardTitle className="text-lg">{name}</CardTitle>
                    <CardDescription className="capitalize">{userName}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent>{comment}</CardContent>
              </Card>
            )
          )}
        </ScrollCarousel>

    </section>
  );
};

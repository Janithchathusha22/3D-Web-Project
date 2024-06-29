import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import one from "../assets/team/1.jpeg";
import two from "../assets/team/2.jpg";
import three from "../assets/team/3.jpeg";
import four from "../assets/team/4.jpg";


interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: one,
    name: "Eshan Dias",
    tag: "Marketing & Business Strategist | 7+ years of brand success across sales, marketing & digital. Championing customer connections & growth strategies.",
    position: "Founder/CEO",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: two,
    name: "Pubudu Gokarella",
    tag: "Performance Marketing Specialist | Experienced online marketer with 12+ years of expertise in PPC advertising & digital marketing",
    position: "Performance Marketing Consultant",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: three,
    name: "Shivantha Rodrigo",
    tag: "Multimedia Specialist | Creative techie with 11+ years experience excels in crafting award-winning multimedia & design solutions for global clients.",
    position: "Art Director",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: four,
    name: "Damith Arachchige",
    tag: "Business Architect | 8+ years' experience. Forges win-win partnerships leveraging marketing, product analytics, and relationship building. Cultivates growth for all.    ",
    position: "Head of Business Partnerships",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold lg:text-left text-center">
      Our {" "}
        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
        Leadership Team
        </span>
    
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground lg:text-left text-center">
      Decades of combined experience driving innovation and delivering results.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks, tag }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center group bg-gradient-to-r from-[#71affffb]  to-[#00ff80] p-[1px]"
              
            >
              <div className="bg-muted h-full rounded-lg flex flex-col items-center">
                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                  <img
                    src={imageUrl}
                    alt={`${name} ${position}`}
                    className="grayscale absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover group-hover:translate-x-32 transition-all duration-500"
                  />
                  <CardTitle className="text-center">{name}</CardTitle>
                  <CardDescription className="text-primary">
                    {position}
                  </CardDescription>
                </CardHeader>

                <CardContent className="text-center pb-2">
                  <p>{tag}</p>
                </CardContent>

                {/* <CardFooter>
                  {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                    <div key={name}>
                      <a
                        href={url}
                        target="_blank"
                        className={buttonVariants({
                          variant: "ghost",
                          size: "sm",
                        })}
                      >
                        <span className="sr-only">{name} icon</span>
                        {socialIcon(name)}
                      </a>
                    </div>
                  ))}
                </CardFooter> */}
              </div>

            </Card>
          )
        )}
      </div>
    </section>
  );
};

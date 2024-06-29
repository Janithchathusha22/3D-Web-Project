import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";
import nav from '../assets/logonav.png'
import navl from '../assets/logonavl.png'
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },

  // {
  //   href: "#pricing",
  //   label: "Pricing",
  // },
  // {
  //   href: "#faq",
  //   label: "FAQ",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="fixed border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-[70px] px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-2 font-bold text-xl flex"
            >

              <img src={nav} alt="" className="w-[150px] " />
            
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex ">
            {/* <ModeToggle /> */}

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Bars3BottomRightIcon
                  className="flex h-6 w-6"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Bars3BottomRightIcon>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    <img src={nav} alt="" className="w-[150px] dark:inline-block hidden" />
                    <img src={navl} alt="" className="w-[150px] dark:hidden inline-block " />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      to={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  {/* <a
                    href=""
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a> */}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          {/* <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }: RouteProps) => (
              <Link
                to={href}
                key={label}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {label}
              </Link>
            ))}
          </nav> */}

          {/* <div className="hidden md:flex gap-2"> */}
          {/* <a
              href=""
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a> */}

          {/* <ModeToggle /> */}
          {/* </div> */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

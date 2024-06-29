import { LogoIcon } from "./Icons";
import nav from '../assets/logonav.png'
import navl from '../assets/logonavl.png'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer id="footer" className="z-20">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-5 ">
          {/* <a
            href="/"
            className="font-bold text-xl flex"
          >
            <img src={nav} alt="" className="w-[250px] dark:inline-block hidden" />
            <img src={navl} alt="" className="w-[250px] dark:hidden inline-block " />

          </a> */}
          <h4 className="text-2xl fonat-semibold mb-3 mt-2 ">Let's keep in touch!</h4>
          <h5 className="text-base mt-0 mb-2 ">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="flex flex-row items-start justify-start gap-5 mt-6">
            <a href="https://web.facebook.com/people/MetroQubix/61553602630050/?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="group transition-all duration-200 hover:-translate-y-2 bg-gradient-to-r from-[#71affffb]  to-[#00ff80] w-12 h-12 flex flex-col items-center justify-center rounded-full border-[1px] p-[1px]">
              <div className="transition-all duration-200 group-hover:bg-transparent bg-muted w-full h-full rounded-full flex flex-col items-center justify-center"> <FacebookIcon className="w-5 h-5 " /></div>
            </a>
            <a href="https://www.instagram.com/hello.metroqubix/" target="_blank" rel="noopener noreferrer" className="group transition-all duration-200 hover:-translate-y-2 bg-gradient-to-r from-[#71affffb]  to-[#00ff80] w-12 h-12 flex flex-col items-center justify-center rounded-full border-[1px] p-[1px]">
              <div className="transition-all duration-200 group-hover:bg-transparent bg-muted w-full h-full rounded-full flex flex-col items-center justify-center"> <InstagramIcon className="w-5 h-5 " /></div>
            </a>
            <a href="https://www.linkedin.com/company/metroqubix/" target="_blank" rel="noopener noreferrer" className="group transition-all duration-200 hover:-translate-y-2 bg-gradient-to-r from-[#71affffb]  to-[#00ff80] w-12 h-12 flex flex-col items-center justify-center rounded-full border-[1px] p-[1px]">
              <div className="transition-all duration-200 group-hover:bg-transparent bg-muted w-full h-full rounded-full flex flex-col items-center justify-center"> <LinkedinIcon className="w-5 h-5 " /></div>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Our Pages</h3>
          <div>
            <Link
              to="/"
              className="opacity-60 hover:opacity-100"
            >
              Home
            </Link>
          </div>

          <div>
            <Link
              to="/blogs"
              className="opacity-60 hover:opacity-100"
            >
              Blogs
            </Link>
          </div>

          <div>
            <Link
              to="/careers"
              className="opacity-60 hover:opacity-100"
            >
              Careers
            </Link>
          </div>
          <div>
            <Link
              to="/contact-us"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </Link>
          </div>
        </div>






      </section>
      <section className="flex flex-col items-center justify-center py-5"><a
        to="/"
        className="font-bold text-xl flex"
      >
        <img src={nav} alt="" className="w-[250px]" />
     

      </a></section>
      <section className="container pb-14 text-center">
        <h6>
          &copy; 2024 Metroqubix. All rights reserved.{" "}
          
        </h6>
      </section>
    </footer>
  );
};

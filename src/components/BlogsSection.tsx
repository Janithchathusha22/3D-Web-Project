import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imgeOne from '../assets/blogs/banner_1.jpg'
import imgeTwo from '../assets/blogs/banner_2.jpg'
import imgeThr from '../assets/blogs/banner_3.jpg'
import { Link } from 'react-router-dom';


export default function BlogsSection() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    const blogs = [
        {
            imag: imgeOne,
            lin: '/the-untold-power-of-your-value-proposition'
        },
        {
            imag: imgeTwo,
            lin: '/unveiling-your-brand-s-soul'
        },
        {
            imag: imgeThr,
            lin: '/website-analytics'
        }
    ]
    return (
        <section className="container py-24 sm:py-32">
            <div className="grid  gap-8 place-items-center">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        Our {" "}
                        <span className="bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
                            Blogs{" "}
                        </span>

                    </h2>
                    <p className="mt-4 mb-10 text-xl text-muted-foreground lg:text-left text-center">  What's New? Check Out Our Latest Blogs</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                        {
                            blogs.map((blog, index) => (
                                <div key={index} className='group cursor-pointer bg-muted overflow-hidden rounded-xl drop-shadow-2xl' >
                                    <Link to={blog.lin}className="absolute inset-0 bg-blue-500/20 -translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-in-out z-10 flex flex-col items-center justify-center" >
                                        <Link to={blog.lin} className="bg-muted px-5 py-2 rounded-lg">Read more</Link>
                                    </Link>
                                    <Link to={blog.lin} >
                                        <img src={blog.imag} alt="" className='transition-all duration-300 group-hover:scale-105' />
                                    </Link>
                                </div>
                            ))
                        }

                        {/* <div className='group cursor-pointer bg-muted overflow-hidden rounded-xl drop-shadow-2xl hover:drop-shadow-2xl' >
                            <Link to='/unveiling-your-brand-s-soul' >
                                <img src={imgeTwo} alt="" className='transition-all duration-300 group-hover:scale-105' />
                            </Link>
                        </div> */}



                    </div>

                </div>
            </div>

        </section>
    )
}

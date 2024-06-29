import { About } from '@/components/About'
import { TracingBeamDemo } from '@/components/AprochSection'
import { CanvasRevealEffectDemo3 } from '@/components/Card'
import { Cta } from '@/components/Cta'
import { FAQ } from '@/components/FAQ'
import { Features } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Navbar } from '@/components/Navbar'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Testimonials } from '@/components/Testimonials'
import { WhyChooseUs } from '@/components/WhyChooseUs'
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,

} from "framer-motion";
import BlogsSection from '@/components/BlogsSection'
import WhatsappChat from '@/components/ui/WhatsappChat'
import videoBG from '../assets/video.mp4'
import VideoBg from '@/components/VideoBg'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import CubeRotate from '@/components/CubeRotate'
import CubeNet from '@/components/CubeNet'
import Loading from '@/components/Loading'
export default function Home() {
    const [ShowComponent, setShowComponent] = useState(true)
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        const timer = setTimeout(() => {
            setShowComponent(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [])
    return (
        <>
            <Helmet>
                <title>MetroQubix | Beyond the Dots</title>
                <meta
                    name="description"
                    content="Connecting Insights for Unparalleled Outcomes."
                    data-react-helmet="true"
                />
                <meta
                    name="keywords"
                    content="
                        metroqubix,
                        metro qubix digital marketing,
                        Metroqubix digital agency,
                        digital marketing services sri lanka,
                        sri lanka digital marketing agency,
                        seo sri lanka for businesses,
                        content marketing agency sri lanka,
                        social media marketing sri lanka,
                        sri lanka web design and development,
                        Web development,
                        Marketing Agency,
                        Digital Agency,
                        Marketing Partner Sri Lanka,
                        Marketing consulting sri lanka,
                        marketing strategy development sri lanka,
                        marketing automation sri lanka,
                        conversion rate optimization sri lanka ,
                        pay-per-click advertising (PPC) sri lanka ,
                        Digital marketing blogs sri lanka ,
                        how to improve website ranking sri lanka,
                        best practices for social media marketing sri lanka,
                        how to choose a digital marketing agency sri lanka,
                        sri lanka content marketing services for e-commerce,
                        social media marketing packages sri lanka for restaurants,
                        digital marketing agency colombo ,
                    "
                    data-react-helmet="true"
                />


            </Helmet>
          
        
                <Navbar />
                {/* {ShowComponent && <VideoBg />} */}
                <Hero />

                <CanvasRevealEffectDemo3 />
                {/* <CubeRotate /> */}
                {/* <CubeNet /> */}
                <HowItWorks />
                <Testimonials />
                <Services />
                {/* <TracingBeamDemo /> */}
                {/* <Sponsors /> */}
                <Features />
                <BlogsSection />
                <WhyChooseUs />
                <Team />
                <Cta />

                {/* <Pricing /> */}
                {/* <Newsletter /> */}
                <FAQ />
                <Footer />
                <WhatsappChat />

           
        </>





    )
}

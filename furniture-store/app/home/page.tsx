'use client';
import React, { Suspense, useEffect, useState } from 'react';
import About from "../components/About";
import AboutContent from "../components/AboutContent";
import ImageCarousal from "../components/ImageCarousal";
import Approach from "../components/Approach";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import LargeImageCarousal from "../components/LargeImageCarousal";
import LargeImageCarousalForMobile from '../components/LargeImageCarousalForMobile';
import Logos from "../components/Logos";
import Project from "../components/Project";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import CustomCursor from "../components/CustomCursor";

import gsap from 'gsap';


export default function Home() {

  const [isMobile, setIsMobile] = useState(false);
  const [hasLoaded, sethasLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Listen for window resize events

    setTimeout(() => { sethasLoaded(true); }, 20)

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
    };
  }, []);


  return (

    <>
      
        <div className="bg-black min-w-full min-h-screen dark font-forum min-width-full overflow-hidden">
        {hasLoaded &&<div>
            <CustomCursor />

            <HeroContent />
            <About />
            {!isMobile && <LargeImageCarousal />}
            {isMobile && <LargeImageCarousalForMobile />}
            <Features />
            <Approach />
            <Testimonials />
            <Logos />
            <Project />

            <Statistics />
            <Footer />
          </div>}

        </div>

      </>

  )
}
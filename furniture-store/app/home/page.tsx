'use client';
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the listener on unmount
    };
  }, []);


    return (
      
      <div className="bg-black max-w-full dark font-forum min-width-full overflow-hidden">
        <CustomCursor/>
         <HeroContent />
        <About />
        {!isMobile&&<LargeImageCarousal />}
        {isMobile&&<LargeImageCarousalForMobile/>}
        <Features />
        <Approach />
        <Testimonials />
        <Logos />
        <Project />
       
        <Statistics />
        <Footer />
      </div>
      
    )
  }
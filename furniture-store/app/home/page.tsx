'use client';
import About from "../components/About";
import AboutContent from "../components/AboutContent";

import Approach from "../components/Approach";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroContent from "../components/TopHeader";
import LargeImageCarousal from "../components/LargeImageCarousal";
import Logos from "../components/Logos";
import Project from "../components/Project";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";

export default function Home() {
    return (
      
      <div className="bg-black">
         <HeroContent />
        <About />
        <LargeImageCarousal />
        <Features />
        <Logos />
        <Approach />
        <Testimonials />
        <Project />
        <Statistics />
        <Footer />
      </div>
      
    )
  }
'use client';
import About from "../components/About";
import AboutContent from "../components/AboutContent";
import ImageCarousal from "../components/ImageCarousal";
import Approach from "../components/Approach";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroContent from "../components/HeroContent";
import LargeImageCarousal from "../components/LargeImageCarousal";
import Logos from "../components/Logos";
import Project from "../components/Project";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import gsap from 'gsap';


export default function Home() {

    return (
      
      <div className="bg-black max-w-full dark font-forum min-width-full overflow-hidden">
         <HeroContent />
        <About />
      
        <LargeImageCarousal />
        <Features />
        <Approach />
        <Testimonials />
        <Logos />
        <Project />
        {/* <ViewGallery /> */}
        <Statistics />
        <Footer />
      </div>
      
    )
  }
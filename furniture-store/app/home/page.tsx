import About from "../components/About";
import Approach from "../components/Approach";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroContent from "../components/TopHeader";
import LargeImageCarousal from "../components/LargeImageCarousal";
import Logos from "../components/Logos";
import Project from "../components/Project";
import Statistics from "../components/Statistics";

export default function Home() {
    return (
      <>
        <HeroContent />
        <About />
        <LargeImageCarousal />
        <Features />
        <Logos />
        <Approach />
        <Project />
        <Statistics />
        <Footer />

      </>
    )
  }
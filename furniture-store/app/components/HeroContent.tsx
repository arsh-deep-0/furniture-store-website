import React from 'react'
import Navbar from './Navbar'
import TextTypingEffect from './typingText'
import TextRevealingEffect from './textReveal'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import Modal from './Modal'
import SocialMediaModal from './SocialMediaModal'
import '../css/app.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HeroContent() {

  useEffect(() => {
    gsap.from('.h2', {
      delay: 1,
      duration: 1.5,
      y: 20,
      opacity: 0,
      ease: 'sine.out',

    });

    gsap.from('.h3', {
      delay: 1,
      duration: 1.5,
      opacity: 0,
      ease: 'sine.out',

    });

    let zoom = (i: any) => {
      const hero = document.querySelector(`.hero${i}`);
      console.log('hi', i);
      gsap.fromTo(hero, { scale: 1.0 }, {
        duration: 3.6,
        scale: 1.1, // Adjust the value to control the zoom level
        ease: 'sine.out',

      });
    }
    const comeup = (i: any) => {
      gsap.to(`.hero${i}`, {
        delay: 5 * (i),
        duration: 2,
        top: 0,
        ease: 'back.inOut',
        onComplete: () => zoom(i),
      })
    }

    const startCalling = () => {
      for (let i = 1; i < 6; i++) {
        comeup(i);
      }
    }

    setTimeout(startCalling, 200)

    gsap.fromTo(".vertical-line", { opacity: 0, scaleY: 1, display: 'none', }, { delay: 0.75, scaleY: 50, opacity: 1, display: 'block', duration: 1.1, ease: "power4.inOut" })

  }, []);
  return (
    <>
      {/* Hero Section: Image Cover with Header Actions Dark */}
      <div className="relative dark w-full max-h-full dark bg-cover bg-bottom bg-no-repeat " style={{ minHeight: '100vh', maxHeight: '100vh', }}>

        <div className=''>
          <div className="hero1 dark bg-cover bg-bottom bg-no-repeat absolute min-h-screen min-w-full top-full" style={{ backgroundImage: `url(/home.jpg)`, minHeight: '100vh', }}>
          </div>
          <div className="hero2 dark bg-cover bg-bottom bg-no-repeat absolute min-h-screen min-w-full top-full" style={{ backgroundImage: `url(/home2.jpg)`, minHeight: '100vh', }}>
          </div>
          <div className="hero3 dark bg-cover bg-bottom bg-no-repeat absolute min-h-screen min-w-full top-full" style={{ backgroundImage: `url(/home1.jpg)`, minHeight: '100vh', }}>
          </div>
          <div className="hero4 dark bg-cover bg-bottom bg-no-repeat absolute min-h-screen min-w-full top-full" style={{ backgroundImage: `url(/home5.png)`, minHeight: '100vh', }}>
          </div>
          <div className="hero5 dark bg-cover bg-bottom bg-no-repeat absolute min-h-screen min-w-full top-full" style={{ backgroundImage: `url(/home3.jpg)`, minHeight: '100vh', }}>
          </div>
        </div>

        <div className={`myGradient relative bg-transparent lg:bg-gradient-to-r bg-gray-900 bg-opacity-95  min-h-screen `}>
          <Navbar />
          <Modal />
          <SocialMediaModal />
          <div className="vertical-line left-line"></div>
          <div className="vertical-line right-line"></div>
          {/* Hero Content */}
          <div className="relative center-box text-center container xl:max-w-7xl mx-auto px-4 pt-4 md:py-16 lg:px-8 lg:py-32 pb-4 ">
            <div className="font-a uppercase h3 text-sm rounded font-medium inline-flex px-2 py-1 leading-4 mb-2 text-gray-200
">
              Elevate your space
            </div>
            <TextRevealingEffect />
            <h2 className="h2 text-sm  leading-relaxed font-medium sm:my-0 lg:w-2/3 mx-auto text-gray-300 lg:font-l lg:text-lg lg:font-l">
              Designed to inspire, our kitchen solutions combine elegance and functionality to transform your cooking space into a culinary haven and experience the joy !
            </h2>
            <div className="h3 flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16 ">
              <a href="https://calendly.com/universalkitchens" className="hoverable font-forum button text-normal inline-flex  justify-center items-center space-x-2 border  rounded-lg px-6 py-2.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring active:bg-blue-700 active:border-blue-700 focus:ring-blue-400 focus:ring-opacity-90">
                <span>Book Appointment</span>
                <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
              </a>
              <a href="/about" className="hoverable font-frank text-normal inline-flex justify-center items-center space-x-2 border  rounded-lg px-6 py-2.5 leading-6 hover:shadow-sm focus:ring active:shadow-none border-gray-200 bg-transparent text-gray-300 hover:border-gray-600 hover:text-gray-200 focus:ring-gray-600 focus:ring-opacity-40 active:border-gray-700">
                <span>Learn More</span>
              </a>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover with Header Actions Dark */}
    </>
  )
}

export default HeroContent
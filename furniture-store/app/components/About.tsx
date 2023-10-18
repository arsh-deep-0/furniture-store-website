import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const [number, setNumber] = useState(0);

  useEffect(() => {


    const increaseNumber = () => {
      setNumber((prevNumber) => {
        if (prevNumber < 15) {
          return prevNumber + 1;
        } else {
          clearInterval(interval as NodeJS.Timeout); // Stop the interval when number reaches 150
          return prevNumber;
        }
      });
    };

    //let interval; // Define the interval variable
    let interval: NodeJS.Timeout | null = null; // Explicitly declare the type

    const scrollTrigger = ScrollTrigger.create({
      trigger: '.number',
      endTrigger: '.aboutus-container',
      start: 'top 90%',
      end: 'bottom 20%',
      toggleActions: 'restart reverse restart reverse',
      onEnter: () => {
        // Start the interval when the scroll trigger is entered
        let interval = setInterval(increaseNumber, 100);
      },
      onLeave: () => {
        // Stop and clear the interval when the scroll trigger is left
        setNumber(15);
        clearInterval(interval as NodeJS.Timeout);
      },
    });

    // Get all elements with the class name 'aboutus'
const aboutUsElements = document.querySelectorAll('.aboutus');

// Iterate through each element and apply the animation
aboutUsElements.forEach((element, index) => {
  gsap.from(element, {
    y: 60,
    opacity: 0,
    stagger: 0.25,
    ease: 'sine.out',
    scrollTrigger: {
      trigger: element, // Use the current element as the trigger
      start: 'top 96%',
      end: 'bottom 20%',
      toggleActions: `restart reverse restart reverse`,
    },
  });
});





    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval as NodeJS.Timeout);
      scrollTrigger.kill(); // Clean up the ScrollTrigger on component unmount
    };
  }, []);

  return (
    <>
      {/* Statistics Section: With Details Alternate */}
      <div className="dark relative text-gray-100 bg-gray-900 dark:text-gray-100 dark:bg-gray-900  ">

        <div className="aboutus-container container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16 space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-between">

          {/* Stats */}
          <div className="aboutus grid grid-cols-1 sm:grid-cols-1 gap-4 md:gap-10 lg:w-3/12 lg:flex-none">
            <div className=" p-5 border-4 rounded-xl flex justify-center items-center">

              <dt className=" text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-600 px-2 py-4">
                <span className="inline-block relative">
                  {/* <span className="absolute inline-block inset-0 translate-x-1 translate-y-1 text-blue-200 select-none transition group-hover:translate-x-0 group-hover:translate-y-0 dark:text-blue-800 text-7xl">150+</span> */}
                  <span className="font-forum number relative text-7xl">{number}+</span>
                </span>
              </dt>
              <dd className="font-medium text-lg leading-relaxed text-gray-400 dark:text-gray-400 text-center">
                <br />Years of <br />Experience
              </dd>

            </div>

          </div>

          <div className="aboutus pl-8 lg:w-4/12">
            <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-500 dark:text-blue-500">
              About Us
            </div>
            <h2 className="text-4xl font-black text-white my-4 dark:text-white">
              of working in GTA (Grand Toronto Area)
            </h2>
          </div>


          {/* END Stats */}


          {/* Heading */}
          <div className="aboutus text-center lg:pl-8 lg:text-left lg:w-5/12">
            {/* <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              Creative solutions by professional designers
            </h2> */}
            <div className="w-12 h-1.5 bg-gray-700 rounded-lg mb-3 mx-auto lg:mx-0 dark:bg-gray-700" />
            <h3 className="text-lg leading-relaxed font-medium text-gray-300 mb-6 dark:text-gray-300">
              Your kitchen is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we can design your dream kitchen to suit any purpose.
            </h3>
            <a href="/gallery" className="inline-flex font-bold justify-center items-center space-x-2 border  rounded-lg px-6 py-3 leading-6 border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-300 hover:text-gray-200 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-40 active:border-gray-700 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
              <span>Our Gallery</span>
              <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
            </a>
          </div>


          {/* END Heading */}
        </div>
      </div>
      {/* END Statistics Section: With Details Alternate */}
    </>
  )
}
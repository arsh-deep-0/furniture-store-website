import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { openAsBlob } from 'fs';
gsap.registerPlugin(ScrollTrigger);

export default function AboutContent() {

  useEffect(()=>{

    gsap.from('.text-1',{
      x:100 ,
      opacity:0,
      duration:0.7,
      ease:'sine.out', 
      scrollTrigger:{
        trigger:'.text-1',
        start:'top 95%',
      }
    })  

    gsap.from('.photo-2',{
      x:100 ,
      opacity:0,
      duration:0.7,
      ease:'sine.out', 
      scrollTrigger:{
        trigger:'.photo-2',
        start:'top 95%',
      }
    })  

    gsap.from('.photo-1',{
      x:-100 ,
      opacity:0,
      duration:0.7,
      ease:'sine.out', 
      scrollTrigger:{
        trigger:'.photo-1',
        start:'top 95%',
      }
    })  


    gsap.from('.text-2',{
      x:-100 ,
      opacity:0,
      duration:0.7,
      ease:'sine.out', 
      scrollTrigger:{
        trigger:'.text-2',
        start:'top 95%',
      }
    })  

    gsap.from('.circle-up',{
      y:-100 ,
      opacity:0,
      duration:0.4,
      ease:'sine.out', 
    })

    gsap.from('.circle-low',{
      y:100 ,
      opacity:0,
      duration:0.4,
      ease:'sine.out', 
    })

    gsap.from('.frame-1',{
      rotate:5 ,
      z:-20,
      opacity:0,
      duration:1,
      ease:'sine.out', 
      stagger:0.2,
    })

    gsap.from('.frame-2',{
      rotate:-5 ,
      opacity:0,
      duration:0.7,
      ease:'sine.out', 
      stagger:0.2,
    })
  },[])
  return (
    <>
      {/* Hero Section: Image Side with Simple Header Dark */}
      <div className="dark">
        <div className="relative  text-gray-100 bg-gray-900 overflow-hidden dark:text-gray-100 dark:bg-gray-900">

          {/* Hero Content */}
          <div className="relative flex flex-col lg:flex-row space-y-4 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 pt-32 lg:px-8 lg:py-16 ">
            <div className="photo-1 lg:w-1/2  lg:flex  lg:items-center">
              <div className="relative mx-5 ">
                <div className="absolute lg:bg-gray-900 top-0 left-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-blue-900" />
                <div className="absolute lg:bg-blue-900 top-0 left-0 w-40 h-40 lg:w-72 lg:h-72  border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950" />
                <div className="absolute lg:bg-gray-900 bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-blue-900" />
                <div className="absolute lg:bg-blue-900 bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950" />
                <div className=" frame-1 absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-500 bg-opacity-75" />
                <div className=" frame-2 absolute inset-0 rounded-xl -m-6 rotate-1 bg-blue-800  shadow-inner dark:bg-blue-900 " />
                <img src="/h2-banner5.jpg" className=" relative rounded-lg mx-auto shadow-lg" alt="Hero Image" />
              </div>
            </div>

            <div className=" text-1 lg:w-1/2 lg:flex lg:items-center lg:pl-20 pt-16">
              <div>
                <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                  About Us
                </div>
                <h1 className="font-ann text-4xl font-black text-black mb-4 dark:text-white">
                  About <span className="text-blue-600 dark:text-blue-500">Universal custom Kitchen</span> Cabinets
                </h1>
                <h2 className="font-frank text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  Located in Northeast Brampton, Universal custom Kitchen Cabinets specializes in designing and manufacturing custom-built high-quality cabinets for all kinds of spaces be it residential or commercial. We focus on small details to create a big picture. We are a Brampton kitchen renovations company that offers a wide variety of quality finishes, styles, and textures that tailor your home to fit your style. Functionality is key, and we are experts in blueesigning your space to fulfill your current needs requirements.
                  <br />
                  <br />
                  Being in the industry for more than 10 years’, with this experience and treasure of knowledge we bring your dream design to reality. We create a functional space which also fulfills your aesthetical requirements.                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  <a href="/contact" className="font-l inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                    <span>Contact Us</span>
                    <svg className="hi-mini hi-arrow-right inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                  </a>

                </div>
              </div>
            </div>

          </div>
          {/* END Hero Content */}
        </div>
      </div>

      {/* END Hero Section: Image Side with Simple Header Dark */}

      {/* Hero Section: Image Side with Simple Header Dark */}
      <div className="dark">
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">

          {/* Hero Content */}
          <div className="relative gap-8 flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-8">
            <div className="text-2 lg:w-1/2 lg:flex lg:items-center">
              <div>
                <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                  Who We Are
                </div>
                <h1 className="font-ann text-4xl font-black text-black mb-4 dark:text-white">
                  Universal custom kitchen Cabinets
                </h1>
                <h2 className="font-frank text-lg leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  Located in Northeast Brampton, Universal custom kitchen Cabinets specializes in designing and manufacturing custom-built high-quality cabinets for all kinds of spaces be it residential or commercial. We focus on small details to create a big picture. We are a Brampton kitchen renovation company that offers a wide variety of quality finishes, styles, and textures that tailor your home to fit your style. Functionality is key, and we are experts in blueesigning your space to fulfill your current needs requirements.
                  <br />
                  <br />
                  Being in the industry for more than 10 years’, with this experience and treasure of knowledge we bring your dream design to reality. We create a functional space which also fulfills your aesthetical requirements. We believe in creating a space, with the use of best grade materials for our products, the latest technology and quality workmanship, and let our work speaks for us. In addition to that, we are very transparent company, we share all the charges of our services very clearly there are no hidden charges which you will uncover when we proceed with the project, to avoid any further confusions we create written contracts with all the payment schedules or notice of charges at every stage of a project.
                  <br />
                  <br />
                  Our custom cabinets are made using premium materials to produce the highest quality cabinetry, and all of our cabinets are completed with European finishes to give your space a unique look that will leave each visitor amazed.
                  <br />
                  <br />
                  We know renovations can be daunting, so our team of experts are committed to providing you with all of the information you need to make an informed decision and have a smooth experience from start to finish. Let us bring your dream space to reality with our team of experts.

                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  <a href="#" className="font-l inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                    <span>Meet Our Team</span>
                    <svg className="hi-mini hi-arrow-right inline-block w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                  </a>

                </div>
              </div>
            </div>
            <div className="photo-2 lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center sm:hidden">
              <div className="relative mx-5">
                <div className="absolute lg:bg-gray-900 top-0 left-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-200 rounded-full -mt-16 -ml-20 dark:border-blue-900" />
                <div className="absolute lg:bg-blue-900  top-0 left-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-100 rounded-full -mt-20 -ml-14 dark:border-blue-950" />
                <div className="absolute lg:bg-gray-900 bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-200 rounded-full -mb-16 -mr-20 dark:border-blue-900" />
                <div className="absolute lg:bg-blue-900 bottom-0 right-0 w-40 h-40 lg:w-72 lg:h-72  border border-blue-100 rounded-full -mb-20 -mr-14 dark:border-blue-950" />
                <div className="absolute inset-0 rounded-xl -m-6 -rotate-2 bg-gray-200 dark:bg-gray-500" />
                <div className="absolute inset-0 rounded-xl -m-6 rotate-1 bg-blue-800 bg-opacity-75 shadow-inner dark:bg-blue-900 " />
                <img src="https://dndkitchencabinets.com/wp-content/uploads/2022/06/About2_01.jpg" className="image relative rounded-lg mx-auto shadow-lg" alt="Hero Image" />
              </div>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Side with Simple Header Dark */}

    </>
  )
}
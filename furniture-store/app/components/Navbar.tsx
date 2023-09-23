import React from 'react'
import gsap from 'gsap'
import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BiMenu } from 'react-icons/bi';
import { ImCross } from 'react-icons/im';

gsap.registerPlugin(ScrollTrigger);
import '../css/app.css';
import { document } from 'postcss';


function Navbar() {

  
  const [navbarVisible, setNavbarVisible] = useState(false);

  const hideNavbar = () => {
    setNavbarVisible(false);
    console.log('clicked');
  };

  const showNavbar = () => {
    setNavbarVisible(true);
    console.log('clicked');
  };

  useEffect(() => {
    gsap.from('.navbar', {
      delay: 0.25,
      duration: 1,
      y: -25,
      opacity: 0,
      ease: 'sine.out',

    });

    ScrollTrigger.create({
      trigger: '.navbar',
      start: 'top top',
      endTrigger: '.footer', // Optional: Specify an element that ends pinning (e.g., a footer)

      toggleClass: { targets: ".navbar", className: "navbar-blue" },
      toggleActions: "restart reset restart reset",
      pin: '.navbar',
      scrub: true,

    })

  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <>
      {/* Main Header */}
      <div id="page-header" className=" relative  flex justify-center items-center py-8">
        {/* Main Header Content */}

        <div className="navbar  text-gray-100  w-full  py-4 px-5  flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 container xl:max-w-7xl mx-0  lg:px-32">
          <div className='flex justify-between items-center'>
            <a href="#" className=" rounded-md px-2 py-1 group inline-flex  items-center space-x-2 font-bold text-lg tracking-wide text-gray-100 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
              <svg className=" hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
              <span className='font-forum sm:font-l-sm uppercase lg:text-lg md:text-lg  lg:font-l'>Universal Custom Kitchens</span>
            </a>
            <BiMenu className='flex md:hidden lg:hidden absolute right-8' id='toggle-nav' onClick={showNavbar}>
            </BiMenu>
          </div>
          <div className="navbar-modal flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10 ">
            <nav className=" flex flex-col items-center justify-center  lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-3 md:flex-row md:space-x-6 sm:flex-col sm:space-y-6">
              <a href="/" className={`hidden text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>Home</span>
              </a>

              <a href="/" className={` text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>Home</span>
              </a>

              <a href="/about" className={` text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>About</span>
              </a>

              <a href="/gallery" className={` text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>Gallery</span>
              </a>

              <a href="/services" className={` text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>Services</span>
              </a>

              <a href="/contact" className={` text-lg  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
                <span>ContactUs</span>
              </a>

            </nav>
            <div className=" rounded-lg flex items-center justify-center space-x-2">
              <a href="mailto:univkitchens@gmail.com" className="button text-normal inline-flex  justify-center items-center space-x-2 border  rounded-md px-3 py-1 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring active:bg-blue-700 active:border-blue-700 focus:ring-blue-400 focus:ring-opacity-90">
                <span>Email</span>
                <MdEmail />

              </a>
            </div>
          </div>

        </div>
        {navbarVisible&&<div className="navbar-modal-2 flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10 ">
          <ImCross className='cross' id='cross' onClick={hideNavbar}></ImCross>
          <nav className=" flex flex-col items-center justify-center  lg:space-y-0 lg:flex-row lg:items-center lg:justify-center lg:space-x-3 md:flex-row md:space-x-6 sm:flex-col sm:space-y-6">
            <a href="/" className={`hidden text-xl  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-forum text-xl'>Home</span>
            </a>

            <a href="/" className={` text-sm  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-forum text-xl'>Home</span>
            </a>

            <a href="/about" className={` text-sm  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-frank text-xl'>About</span>
            </a>

            <a href="/gallery" className={` text-sm  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-frank text-xl'>Gallery</span>
            </a>

            <a href="/services" className={` text-sm  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-frank text-xl'>Services</span>
            </a>

            <a href="/contact" className={` text-sm  text-gray-100 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 `}>
              <span className='new-nav font-frank text-xl'>ContactUs</span>
            </a>

          </nav>
          <div className=" rounded-lg flex items-center justify-center space-x-2 mr-4">
            <a href="mailto:univkitchens@gmail.com" className="button text-normal inline-flex  justify-center items-center space-x-2 border  rounded-md px-3 py-1 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring active:bg-blue-700 active:border-blue-700 focus:ring-blue-400 focus:ring-opacity-90">
              <span>Email</span>
              <MdEmail />

            </a>
          </div>
        </div>}
        {/* END Main Header Content */}
      </div>
      {/* END Main Header */}
    </>
  )
}

export default Navbar
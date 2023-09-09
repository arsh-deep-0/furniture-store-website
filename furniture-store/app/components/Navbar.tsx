import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';

function Navbar() {

  useEffect(() => {
    gsap.from('.navbar', {
      delay:1,
      duration: 1,
      y: -40,
      opacity:0, 
      ease: 'sine.out',
      
    });
  }, []); // Empty dependency array ensures it runs once when the component mounts

  return (
    <>
    {/* Main Header */}
    <header id="page-header" className="relative flex flex-none items-center py-8">
              {/* Main Header Content */}
              <div className="navbar flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div>
                  <a href="#" className=" bg-gray-600 rounded-md px-2 py-1 group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300">
                    <svg className=" hi-mini hi-cube-transparent inline-block w-5 h-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
                    <span className='font-raleway text-lg '>Universal Custom Kitchens</span>
                  </a>
                </div>
                <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-10">
                  <nav className=" space-x-3 md:space-x-6">
                    <a href="#" className="text-base font-helvetica  text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
                      <span>Home</span>
                    </a>
                    <a href="#" className="text-base font-helvetica text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
                      <span>About Us</span>
                    </a>
                    <a href="#" className="text-base font-helvetica text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
                      <span>Gallery</span>
                    </a>
                    <a href="#" className="text-base font-helvetica text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
                      <span>Services</span>
                    </a>
                    <a href="#" className="text-base font-helvetica text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400">
                      <span>Contact Us</span>
                    </a>
                  </nav>
                  <div className="  flex items-center justify-center space-x-2">
                    <a href="#" className="inline-flex justify-center items-center space-x-2 border font-helvetica rounded-lg px-3 py-2 leading-5 text-base border-gray-200 bg-gray-600 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                      <span>Sign In</span>
                      <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* END Main Header Content */}
            </header>
            {/* END Main Header */}
    </>
  )
}

export default Navbar
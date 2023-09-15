import React from 'react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {

  useEffect(() => {

    gsap.from(".testi",
      {
        y: 60,
        opacity: 0,
        stagger: 0.25,
        ease: 'sine.out',
        scrollTrigger: {
          trigger: '.testi',
          endTrigger:'.testi-container',
          start: 'top 90%',
          end:'bottom 40%',
          toggleActions: "restart reverse restart reverse ",
        }
      })



  }, []);
  return ( 
    <>
      {/* Testimonials Section: Simple Multiple */}
      <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
              OUR CLIENTS
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              Here&apos;s what our satisfied clients are saying
            </h2>
          </div>
          {/* END Heading */}

          {/* Feedback */}
          <div className="testi-container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                    Exceptional service from Universal Custom Kitchens. They turned my ideas into a stunning, functional kitchen. Their commitment to details and involving me in decisions was outstanding. Highly recommended!
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-mEZ3PoFGs_k-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Elsa King
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Senior Client
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                    Choosing Universal Kitchens for my kitchen remodel was a great decision. Their designers and installation team were precise and professional. My kitchen now exceeds expectations. Highly recommend their expertise                    </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-sibVwORYqs0-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Alex Saunders
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Fresh Designer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                    Thanks to Universal custom kitchens, my kitchen is a dream. From design to installation, they excelled. Their precision and care produced a beautiful, functional space. If you want quality, choose Universal custom kitchens
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-DLKR_x3T_7s-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Sue Keller
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        CEO and Founder
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                  Choosing Universal custom kitchens for my kitchen remodel was a great decision. Their designers and installation team were precise and professional. My kitchen now exceeds expectations. Highly recommend their expertise.
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Alejandro Lee
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                  Our kitchen by Universal custom kitchens is a masterpiece. Meticulous attention to detail and expert craftsmanship shine through. It &apos; s more than a kitchen , it &apos; s the heart of our home
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-DLKR_x3T_7s-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Sue Keller
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        CEO and Founder
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="testi  px-6 pt-16 pb-6 md:px-12 md:pb-10 relative rounded-lg shadow-sm bg-white dark:text-gray-100 dark:bg-gray-800">
              <div className="absolute top-0 right-0 text-8xl mt-2 mr-5 text-gray-200 opacity-75 font-serif dark:text-gray-700/75">“</div>
              <div className="relative">
                <blockquote>
                  <p className="font-medium text-base leading-8 mb-5">
                  Incredible results with Universal kitchens. Their precision and design expertise transformed my kitchen into a functional work of art. Highly recommend their outstanding service
                  </p>
                  <footer className="flex items-center space-x-4">
                    <a href="#" className="flex-none rounded-full overflow-hidden w-16 h-16 transition ease-out duration-150 border-2 border-gray-50 hover:border-white hover:shadow-md hover:scale-125 active:border-gray-50 active:shadow-sm active:scale-110 dark:border-gray-800 dark:shadow-gray-900">
                      <img src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg" alt="Avatar Photo" />
                    </a>
                    <div>
                      <a href="#" className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                        Alejandro Lee
                      </a>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Simple Multiple */}
    </>
  )
}
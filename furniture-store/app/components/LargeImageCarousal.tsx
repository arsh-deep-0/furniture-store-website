import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';



export default function LargeImageCarousal() {
  const gsapTimeline = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleReadMore = () => {
    setIsOpen(!isOpen);
  };

  const toggleReadMore2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleReadMore3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleReadMore4 = () => {
    setIsOpen4(!isOpen4);
  };

  useEffect(() => {
    gsapTimeline.current = gsap.timeline();



    const moveLeft = () => {
      gsap.from('.box-container', {
        duration: 0.5,
        x: -300,
        opacity: 0,
        stagger: 0.2,
        ease: 'sine.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.image-container',
          endTrigger: '.image-container',
          start: 'top 90%',
          end: 'bottom 40%',
        }
      });
    }

    moveLeft();


    // Clean up the timeline and scroll event listener when the component unmounts
    return () => {
      if (gsapTimeline.current) {
        gsapTimeline.current.kill();
      }

    };
  }, []);

  return (
    <>
      {/* Image Overlays Section: Overlay Slide Top */}
      <div className="relative bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className=" container xl:min-w-100  mx-auto px-4 py-16 lg:px-8 lg:pb-8 ">
          {/* Heading */}
          <div className="text-center">
            <div className="font-an  text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
              Presenting
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white pb-8">
              A showcase of Excellence</h2>

          </div>
          {/* END Heading */}
          <div className="image-container bg-gray-800 py-4 px-4 rounded-md grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 lg:gap-16 " style={{ gridAutoRows: 'auto', gridAutoColumns: 'auto' }}>
            {/* Item */}


            <div className="box-container h-96 relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore}
              onMouseLeave={toggleReadMore} tabIndex={0}
              style={{ height:'36rem'  }}
              >

              <div className="absolute w-full text-center p-4  ">

                <h4 className="font-semibold text-2xl text-white">
                  Kitchen
                  <br />
                  Renovation
                </h4>
                <h5 className="text-sm text-white text-opacity-80 mb-5">
                  Read more...
                </h5>


              </div>
              <img src="/h2-banner4.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
              {/* Item Overlay */}
              <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
              </div>


              <p className={`left-0  text-center read-more-content ${isOpen ? 'open' : ''} h-auto absolute`}>
                With immense experience and knowledge, Universal Kitchens is the premier kitchen remodeling services provider that has been providing these services for over 5 years now.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore2}
              onMouseLeave={toggleReadMore2} tabIndex={0}
              style={{ height:'36rem'  }}>
              <div className="absolute w-full text-center p-4  ">

                <h4 className="font-semibold text-lg text-white">
                  New Kitchen
                  <br /> Design
                </h4>
                <h5 className="text-sm text-white text-opacity-80 mb-5">
                  Read more...
                </h5>


              </div>
              <img src="/h2-banner1.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
              {/* Item Overlay */}
              <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
              </div>


              <p className={`left-0  text-center read-more-content ${isOpen2 ? 'open' : ''} h-auto absolute`}>
                We understands that your kitchen needs to be changed really fast, but in order to make that happen, you need to hire the best Brampton Kitchen Designers.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore3}
              onMouseLeave={toggleReadMore3} tabIndex={0}
              style={{ height:'36rem'  }}>
              <div className="absolute w-full text-center p-4   ">

                <h4 className="font-semibold  text-lg text-white">
                  Custom made 
                  <br />Kitchen Cabinets
                </h4>
                <h5 className="text-sm text-white text-opacity-80 mb-5">
                  Read more...
                </h5>


              </div>
              <img src="/h2-banner3.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover'  }}/>
              <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
              </div>
              {/* Item Overlay */}

              <p className={`left-0  text-center read-more-content ${isOpen3 ? 'open' : ''} h-auto absolute`}>
                One of the key elements that you need to focus on in the kitchen is the cabinets that you have to store all your utensils and kitchen essentials. Without the cabinets, your kitchen would look empty and you will have a hard time storing all your goods and other kitchen things.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore4}
              onMouseLeave={toggleReadMore4} tabIndex={0}
              style={{ height:'36rem'  }}>
              <div className="absolute w-full text-center p-4  ">

                <h4 className="font-semibold text-lg text-white">
                  Bar Designing
                </h4>
                <h5 className="text-sm text-white text-opacity-80 mb-5">
                  Read more...
                </h5>

              </div>
              <img src="/h2-banner2.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
              <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
              </div>
              {/* Item Overlay */}


              <p className={`left-0  text-center read-more-content ${isOpen4 ? 'open' : ''} h-auto absolute`}>
                Spend a good time with your friends, colleagues, and family members at a bar that they have never seen before. We know that designing a bar is something that requires a lot of time and planning, but you want to shorten that by hiring our Bar Cabinets in Brampton.
              </p>

              {/* END Item Overlay */}
            </div>
            {/* END Item */}
          </div>

        </div>
      </div>
      {/* END Image Overlays Section: Overlay Slide Top */}
    </>
  )
}


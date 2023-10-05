import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';



export default function LargeImageCarousal() {
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
   



    const moveLeft = () => {
      gsap.to('.images-container', {
        duration: 0.5,
        x:-1.35*window.innerWidth,
       
       
        ease: 'sine.out',
        force3D: true,
        scrollTrigger: {
          trigger: '.images-container',
          endTrigger: '.images-container',
          start: 'top 30%',
          end: 'top 5%',
          scrub:3,
          
        }
      });
    }

    moveLeft();


    
  }, []);

  return (
    <>
      {/* Image Overlays Section: Overlay Slide Top */}
     

      <div className="relative dark  bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className=" container lg:min-w-100  mx-auto px-4 py-16 lg:px-8 lg:pb-8 ">
          {/* Heading */}
          <div className="text-center">
            <div className="font-an  text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
              Presenting
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white pb-8">
              A showcase of Excellence</h2>

          </div>
          {/* END Heading */}
          
<div className="images-container overflow-hidden bg-white py-4 px-4 rounded-md flex flex-nowrap md:grid-cols-4 gap-8 md:gap-8 lg:gap-12 " >
            {/* Item */}


            <div className="box-Container  h-96 relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore}
              onMouseLeave={toggleReadMore}
              onSelect={toggleReadMore} tabIndex={0}
              style={{ height:'24rem' }}
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


              <p className={`left-0  text-center read-more-content ${isOpen ? 'open' : ''} h-auto absolute text-lg`}>
                With immense experience and knowledge, Universal Kitchens is the premier kitchen remodeling services provider that has been providing these services for over 5 years now.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-Container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore2}
              onMouseLeave={toggleReadMore2} 
              onSelect={toggleReadMore2} tabIndex={0}
              style={{ height:'24rem'  }}>
              <div className="absolute w-full text-center p-4  ">

                <h4 className="font-semibold text-2xl text-white">
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


              <p className={`left-0  text-center read-more-content ${isOpen2 ? 'open' : ''} h-auto absolute text-lg`}>
                We understands that your kitchen needs to be changed really fast, but in order to make that happen, you need to hire the best Brampton Kitchen Designers.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-Container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore3}
              onMouseLeave={toggleReadMore3} 
              onSelect={toggleReadMore3} tabIndex={0}
              style={{ height:'24rem'  }}>
              <div className="absolute w-full text-center p-4   ">

                <h4 className="font-semibold  text-2xl text-white">
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

              <p className={`left-0  text-center read-more-content ${isOpen3 ? 'open' : ''} h-auto absolute text-lg`}>
                One of the key elements that you need to focus on in the kitchen is the cabinets that you have to store all your utensils and kitchen essentials. Without the cabinets, your kitchen would look empty and you will have a hard time storing all your goods and other kitchen things.
              </p>
              {/* END Item Overlay */}
            </div>
            {/* END Item */}

            {/* Item */}
            <div className="box-Container relative group rounded-md bg-gray-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900 read-more-button"
              onMouseEnter={toggleReadMore4}
              onMouseLeave={toggleReadMore4}
              onSelect={toggleReadMore4}  tabIndex={0}
              style={{ height:'24rem'  }}>
              <div className="absolute w-full text-center p-4  ">

                <h4 className="font-semibold text-2xl text-white">
                  Bar
                  <br /> Designing
                </h4>
                <h5 className="text-sm text-white text-opacity-80 mb-5">
                  Read more...
                </h5>

              </div>
              <img src="/h2-banner2.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
              <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-gray-900 bg-opacity-60 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
              </div>
              {/* Item Overlay */}


              <p className={`left-0  text-center read-more-content ${isOpen4 ? 'open' : ''} h-auto absolute text-lg`}>
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

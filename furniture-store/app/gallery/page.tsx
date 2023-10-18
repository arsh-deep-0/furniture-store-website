'use client'
import React from 'react'
import ImageCarousal from '../components/ImageCarousal'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'
import CustomCursor from "../components/CustomCursor";

const imageUrls = [
  
  '/project2.webp',
  '/project3.webp',
  '/project4.webp',

  '/project5.webp',
  '/project6.webp',
  '/project7.webp',

  '/project8.webp',
   '/project21.jpg',
   '/project14.jpg',
  
  '/project12.jpg',
  '/project13.jpg', 
  '/project17.jpg',

  '/project9.webp',
  '/project15.jpg', 
  '/project16.jpg',

  '/project10.webp',  
  '/project18.jpg',  
  '/project22.jpg',

  '/project33 (1).jpg',  
  '/project33 (4).jpg',
  '/project33 (20).jpg',
 
  
  '/project33 (7).jpg',
  '/project33 (8).jpg',
  '/project33 (12).jpg',

  
  '/project33 (10).jpg',
  '/project33 (11).jpg',
  '/project33 (9).jpg',
  
  
  '/project33 (13).jpg',
  '/project33 (14).jpg',
  '/project33 (15).jpg',
  
  '/project33 (18).jpg',
  
  '/project33 (21).jpg',
  '/project33 (6).jpg',
];

function Gallery() {
  return (
    <>
     <CustomCursor/>
      <div className="font-frank ">

        <TopHeaderButtonless title="Our Gallery" />

        <div className=" text-center bg-white pt-24 pb-4">
          <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
            A Glimpse of Gallery
          </div>
          <h2 className="font-frank text-4xl font-black text-black mb-4 dark:text-white">
            Here are some of the  <span className='text-blue-600'> best work  </span> that we have  <span className='text-blue-600'>Produced</span>
          </h2>

        </div>

        <ImageCarousal imageUrls={imageUrls} />
      

        <Footer />

      </div>
    </>
  )
}

export default Gallery
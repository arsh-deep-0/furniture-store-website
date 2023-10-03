'use client'
import React from 'react'
import ImageCarousal from '../components/ImageCarousal'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'
import CustomCursor from "../components/CustomCursor";

const imageUrls = [
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-12-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-11-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-10-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-9-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-8-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-7-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-6-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-5-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-4-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-3-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-2-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-1-850x520.jpg',
];

function Gallery() {
  return (
    <>
     <CustomCursor/>
      <div className="font-frank dark">

        <TopHeaderButtonless title="Our Gallery" />

        <div className=" text-center bg-gray-900 pt-24 pb-4">
          <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
            A Glimpse of Gallery
          </div>
          <h2 className="font-frank text-4xl font-black text-black mb-4 dark:text-white">
            Here are some of the  <span className='text-blue-600'> best work  </span> that we have  <span className='text-blue-600'>Produced</span>
          </h2>

        </div>

        <ImageCarousal imageUrls={imageUrls} />
        <ImageCarousal imageUrls={imageUrls} />
        <ImageCarousal imageUrls={imageUrls} />
        <ImageCarousal imageUrls={imageUrls} />

        <Footer />

      </div>
    </>
  )
}

export default Gallery
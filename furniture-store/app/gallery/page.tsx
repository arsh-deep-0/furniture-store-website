'use client'
import React from 'react'
import ImageCarousal from '../components/ImageCarousal'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'

const imageUrls = [
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-12-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-11-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-10-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-9-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-8-850x520.jpg',
  'https://dndkitchencabinets.com/wp-content/uploads/2022/06/projects-7-850x520.jpg',
];

function Gallery() {
  return (
    <>
    <div className="font-frank">
    
      <TopHeaderButtonless title="Our Gallery"/>

      <ImageCarousal imageUrls = {imageUrls}/>
      <ImageCarousal imageUrls = {imageUrls}/>
      <ImageCarousal imageUrls = {imageUrls}/>
      <ImageCarousal imageUrls = {imageUrls}/>

      <Footer />

    </div>
    </>
  )
}

export default Gallery
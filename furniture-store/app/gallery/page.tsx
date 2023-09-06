import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousal from '../components/ImageCarousal'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'

function Gallery() {
  return (
    <>
      <TopHeader />

      <ImageCarousal />
      <ImageCarousal />
      <ImageCarousal />
      <ImageCarousal />

      <Footer />
    </>
  )
}

export default Gallery
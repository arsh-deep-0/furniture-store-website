'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousal from '../components/ImageCarousal'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'

function Gallery() {
  return (
    <>
      <TopHeaderButtonless />

      <ImageCarousal />
      <ImageCarousal />
      <ImageCarousal />
      <ImageCarousal />

      <Footer />
    </>
  )
}

export default Gallery
'use client'
import React from 'react'
import Footer from '../components/Footer'
import AboutContent from '../components/AboutContent'
import TopHeaderButtonless from '../components/TopHeaderButtonless'
import CustomCursor from "../components/CustomCursor";

function About() {
  return (
    <> 
    <div className='font-frank dark'>
    <CustomCursor/>
      <TopHeaderButtonless title="About Us " />
      <AboutContent />
      <Footer />
    </div>

    </>
  )
}

export default About
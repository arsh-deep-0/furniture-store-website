'use client'
import React from 'react'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'
import { HiOutlineHome } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md';

import { useEffect, useState } from 'react';
import gsap from 'gsap'

function Contact() {
  
  useEffect(() => {
    gsap.from('.contact-box',{
      opacity:0,
      y:10,
      duration:3,
    })
  },[])
  return (
    <>
      <div className="font-frank dark">
        <TopHeaderButtonless title="Contact Us" />
        <section className="text-white pt-24 pb-24 bg-gray-900 body-font relative">
          <div className="contact-box container py-8  px-5 mx-auto grid grid-cols-1 md:flex gap-10 lg:flex">

            <div className="lg:w-3/5 md:w-2/3  bg-gray-900 shadow-md rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10  ">
              <h2 className="text-blue-600    font-ans uppercase font-bold ">Get in touch with us</h2>
              <p className="text-white text-base font-l">Feel free to reach out to us to discuss your custom kitchen needs. Whether you have questions, need advice, or want to get started on your dream kitchen project, we  re here to assist you.
              </p>
              <br />
              <p className="text-base font-l" >You can give us a call, send us an email, or fill out our contact form, and we ll get back to you promptly. Let s create the kitchen you ve always envisioned together 
              </p>
            </div>


            <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">

              <div className="flex items-center">

                <div>
                  <div className='flex gap-4'>
                    <HiOutlineHome className="icon inline" />
                    <h3 className="text-sm an font-semibold font-an inline text-blue-600">Headquarter</h3>
                  </div>

                  <p className='text-sm font-l'>266 Rutherford Rd S Unit 28, Brampton, ON L6W 3N3, Canada</p>
                </div>

              </div>
              <hr />


              <div className="flex items-center">

                <div>
                  <div className='flex gap-4'>
                    <BiPhoneCall className="icon inline" />
                    <h3 className="font-an an text-lg font-semibold  text-blue-600">Phone Number</h3>
                  </div>

                  <p className='text-sm font-l'>(647) 667-6786</p>
                </div>
              </div>
              <hr />


              <div className="flex items-center">

                <div>
                  <div className='flex gap-4'>
                    <MdEmail className="icon inline" />
                    <h3 className="font-an an text-lg  text-blue-600">Email us</h3>
                  </div>

                  <p className='text-sm font-l'>univkitchens@gmail.com</p>
                </div>
              </div>
              <hr />
            </div>
          </div>

          <div className="container px-5 py-8 pb-24 mx-auto grid grid-cols-1  md:flex gap-10">


            <div className="lg:w-3/5 md:w-2/3 border bg-gray-900 shadow-md rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
              <iframe title="map" width="100%" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.3678896819843!2d-79.5637576!3d43.7652216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d207ad3c6f1%3A0x9b575a7685a0cdb5!2sUniversal%20Custom%20Kitchens%20Cabinets!5e0!3m2!1sen!2sin!4v1694456545369!5m2!1sen!2sin"
                style={{ filter: "grayscale(0) contrast(1.2) opacity(0.99)" }}></iframe>
            </div>

            <div className="lg:w-1/3 md:w-1/2 border bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-blue-600  text-lg mb-1 font-ans font-medium title-font">Feedback</h2>
              <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
              <div className="relative mb-4">
                <label className="leading-7 font-l text-sm text-gray-400">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 font-l text-sm text-gray-400">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="font-l leading-7 text-sm text-gray-400">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-blue-600 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg font-l">Give feedback</button>
              <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </div>

          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Contact
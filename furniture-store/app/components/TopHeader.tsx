import React from 'react'
import Navbar from './Navbar'

function TopHeader() {
  return (
    <>
    {/* Hero Section: Image Cover with Header Actions Dark */}
    <div className="dark bg-cover bg-bottom" style={{ backgroundImage: 'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")' }}>
        <div className="relative bg-transparent lg:bg-gradient-to-r backdrop-blur-sm bg-gray-900 bg-opacity-95 lg:bg-opacity-90 from-transparent via-gray-900 to-transparent">

          <Navbar />
          {/* Hero Content */}
          <div className="relative text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="text-sm rounded bg-gray-100 border border-gray-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 text-gray-200 bg-gray-700/50 border-gray-600/50">
              v6.0 is now live!
            </div>
            <h1 className="text-4xl font-black text-white">
              Automate &amp; scale your marketing
            </h1>
            <h2 className="text-xl leading-relaxed font-medium  lg:w-2/3 mx-auto text-gray-300">
              Save, schedule and generate social media posts for all the networks you are part of. Inspiring results from first day.
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
              <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring active:bg-blue-700 active:border-blue-700 focus:ring-blue-400 focus:ring-opacity-90">
                <span>Get Started</span>
                <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 hover:shadow-sm focus:ring active:shadow-none border-gray-700 bg-transparent text-gray-300 hover:border-gray-600 hover:text-gray-200 focus:ring-gray-600 focus:ring-opacity-40 active:border-gray-700">
                <span>Learn More</span>
              </a>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
      </div>
      {/* END Hero Section: Image Cover with Header Actions Dark */}
    </>
  )
}

export default TopHeader
import React from 'react'
import Navbar from './Navbar'

function TopHeaderButtonless() {
  return (
    <>
    {/* Hero Section: Image Cover with Header Actions Dark */}
    <div className="dark bg-cover bg-bottom" style={{backgroundImage: 'url("https://cdn.tailkit.com/media/placeholders/photo-Nyvq2juw4_o-1280x400.jpg")'}}>
          <div className="relative bg-transparent lg:bg-gradient-to-r backdrop-blur-sm bg-gray-900 bg-opacity-95 lg:bg-opacity-90 from-transparent via-gray-900 to-transparent">
            
          <Navbar />
            {/* Hero Content */}
            <div className="relative text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
              <div className="text-sm rounded font-medium inline-flex px-2 py-1 leading-4 mb-2 uppercase">
                Homepage &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; About
              </div>
              <h1 className="text-7xl font-bold text-white">
                About Us
              </h1>
              
              
            </div>
            {/* END Hero Content */}
          </div>
        </div>
        {/* END Hero Section: Image Cover with Header Actions Dark */}
    </>
  )
}

export default TopHeaderButtonless
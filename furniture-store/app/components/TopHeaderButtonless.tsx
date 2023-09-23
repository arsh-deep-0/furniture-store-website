import React from 'react'
import Navbar from './Navbar'

interface TopHeaderButtonlessProps {
  title: string
}

function TopHeaderButtonless({title}: TopHeaderButtonlessProps) {
  return (
    <>
    {/* Hero Section: Image Cover with Header Actions Dark */}
    <div className="dark bg-cover bg-bottom" style={{backgroundImage: 'url("/header.jpg")'}}>
          <div className="relative bg-transparent lg:bg-gradient-to-r  bg-gray-900  myGradient">
            
          <Navbar />
            {/* Hero Content */}
            <div className="relative text-center container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
              <div className="text-white font-l text-sm rounded font-medium inline-flex px-2 py-1 leading-4 mb-2 uppercase">
                Homepage &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; {title}
              </div>
              <h1 className="text-7xl font-bold text-white">
                {title}
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
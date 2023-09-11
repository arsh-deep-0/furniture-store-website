export default function About() {
  return (
    <>
      {/* Statistics Section: With Details Alternate */}
      <div className="relative bg-white dark:text-gray-100 dark:bg-gray-900 ">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-10 lg:space-y-0 lg:flex lg:items-center lg:justify-between">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 lg:w-8/12 lg:flex-none">
            <div className="p-5 border-8 flex justify-center items-center">
              
                <dt className="text-4xl lg:text-5xl font-extrabold text-blue-700 dark:text-blue-400 px-2">
                  <span className="inline-block relative">
                    <span className="absolute inline-block inset-0 translate-x-1 translate-y-1 text-blue-200 select-none transition group-hover:translate-x-0 group-hover:translate-y-0 dark:text-blue-800 text-7xl">25</span>
                    <span className="relative text-7xl">25</span>
                  </span>
                </dt>
                <dd className="font-medium leading-relaxed text-gray-600 dark:text-gray-400 text-center">
                  Years<br />experience<br />working
                </dd>
              
            </div>

            <div className="pl-8">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                About Us
              </div>
              <h2 className="text-4xl font-black text-black my-4 dark:text-white">
                Creative solutions by professional designers
              </h2>
            </div>

          </div>
          {/* END Stats */}


          {/* Heading */}
          <div className="text-center lg:pl-8 lg:text-left lg:w-1/2">
            {/* <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              Creative solutions by professional designers
            </h2> */}
            <div className="w-12 h-1.5 bg-gray-200 rounded-lg mb-3 mx-auto lg:mx-0 dark:bg-gray-700" />
            <h3 className="text-lg leading-relaxed font-medium text-gray-700 mb-6 dark:text-gray-300">
              Your kitchen is an expression of who you are, and its design should match your lifestyle. Whether you have traditional tastes or desire a modern feel, we can design your dream kitchen to suit any purpose.
            </h3>
            <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-3 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
              <span>Continue Reading</span>
              <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
            </a>
          </div>


          {/* END Heading */}
        </div>
      </div>
      {/* END Statistics Section: With Details Alternate */}
    </>
  )
}
export default function Features() {
    return (
      <>
        {/* Features Section: Modern with Icons */}
        <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            {/* Heading */}
            <div className="text-center">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                Improve your design
              </div>
              <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                Fully Responsive UI Components
              </h2>
              <h3 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
                Carefully coded and tested. You can use them to build the UI of your web project without ever leaving your HTML.
              </h3>
            </div>
            {/* END Heading */}
  
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
              <div className="py-5 text-center">
                <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                  <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                  <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                  <svg className="hi-outline hi-code-bracket inline-block w-8 h-8 text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Framework Agnostic
                </h4>
                <p className="text-left leading-relaxed text-gray-600 dark:text-gray-400">
                  Each component is an HTML code snippet which you can easily copy into your code and customize it to match your needs. They will work in any framework you are using.
                </p>
              </div>
              <div className="py-5 text-center">
                <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                  <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                  <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                  <svg className="hi-outline hi-device-phone-mobile inline-block w-8 h-8 text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  Fully Responsive
                </h4>
                <p className="text-left leading-relaxed text-gray-600 dark:text-gray-400">
                  They are designed to work in various screen sizes, from mobile to desktop. Their design will adapt based on the device you are using, and you can easily preview them beforehand.
                </p>
              </div>
              <div className="py-5 text-center">
                <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                  <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                  <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                  <span className="font-medium text-xl text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100">JS</span>
                </div>
                <h4 className="text-lg font-bold mb-2">
                  JS Snippets
                </h4>
                <p className="text-left leading-relaxed text-gray-600 dark:text-gray-400">
                  All UI Components have working code snippets for HTML, React and Vue.js. Those who require JavaScript to work include Alpine.js snippets as well.
                </p>
              </div>
            </div>
            {/* END Features */}
          </div>
        </div>
        {/* END Features Section: Modern with Icons */}
      </>
    )
  }
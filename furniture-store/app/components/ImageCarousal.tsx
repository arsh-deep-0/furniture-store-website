export default function ImageCarousal() {
    return (
      <>
        {/* Image Overlays Section: Overlay Slide Top */}
        <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
          <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {/* Item */}
              <div className="relative group rounded-lg bg-blue-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900" tabIndex={0}>
                <img src="https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg" alt="Image 1" />
                {/* Item Overlay */}
                <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-blue-900 bg-opacity-80 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-white">
                      Amazing Lakes
                    </h4>
                    <h5 className="text-sm text-white text-opacity-80 mb-5">
                      Explore the unknown
                    </h5>
                    <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-600 bg-blue-600 text-white hover:text-white hover:bg-blue-700 hover:border-blue-700 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
                      <span>More Info</span>
                      <svg className="hi-mini hi-arrow-top-right-on-square inline-block w-4 h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
                {/* END Item Overlay */}
              </div>
              {/* END Item */}
  
              {/* Item */}
              <div className="relative group rounded-lg bg-blue-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900" tabIndex={0}>
                <img src="https://cdn.tailkit.com/media/placeholders/photo-Bkci_8qcdvQ-800x600.jpg" alt="Image 2" />
                {/* Item Overlay */}
                <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-blue-900 bg-opacity-80 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-white">
                      Green Forests
                    </h4>
                    <h5 className="text-sm text-white text-opacity-80 mb-5">
                      Breath fresh oxygen
                    </h5>
                    <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-600 bg-blue-600 text-white hover:text-white hover:bg-blue-700 hover:border-blue-700 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
                      <span>More Info</span>
                      <svg className="hi-mini hi-arrow-top-right-on-square inline-block w-4 h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
                {/* END Item Overlay */}
              </div>
              {/* END Item */}
  
              {/* Item */}
              <div className="relative group rounded-lg bg-blue-900 overflow-hidden focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-offset-2 focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50 focus-within:ring-offset-2 dark:ring-offset-gray-900" tabIndex={0}>
                <img src="https://cdn.tailkit.com/media/placeholders/photo-Y8lCoTRgHPE-800x600.jpg" alt="Image 3" />
                {/* Item Overlay */}
                <div className="absolute inset-0 rounded flex flex-col items-center justify-center bg-blue-900 bg-opacity-80 transition duration-300 ease-out opacity-0 translate-y-full group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-hover:translate-y-0 group-focus:translate-y-0 group-focus-within:translate-y-0">
                  <div className="text-center">
                    <h4 className="font-semibold text-lg text-white">
                      Gorgeous Peaks
                    </h4>
                    <h5 className="text-sm text-white text-opacity-80 mb-5">
                      Try to reach them
                    </h5>
                    <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-3 py-2 leading-5 text-sm border-blue-600 bg-blue-600 text-white hover:text-white hover:bg-blue-700 hover:border-blue-700 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-600 active:border-blue-600">
                      <span>More Info</span>
                      <svg className="hi-mini hi-arrow-top-right-on-square inline-block w-4 h-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" /></svg>
                    </a>
                  </div>
                </div>
                {/* END Item Overlay */}
              </div>
              {/* END Item */}
            </div>
          </div>
        </div>
        {/* END Image Overlays Section: Overlay Slide Top */}
      </>
    )
  }

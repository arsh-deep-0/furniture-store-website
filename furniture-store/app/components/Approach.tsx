export default function Approach() {
    return (
      <>
        {/* Hero Section: Image Side with Header Actions */}
        <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
          
  
          {/* Hero Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="lg:flex lg:items-center">
              <div>
                <div className="text-sm rounded text-emerald-800 bg-emerald-100 border border-emerald-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-emerald-200 dark:bg-emerald-900/50 dark:border-emerald-800/50">
                  New dashboard is live!
                </div>
                <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                  Premium leads and CRM for all your SaaS projects
                </h1>
                <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  Focus on building your amazing service and we will do the rest. We grew more than 100,000 online businesses.
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                  <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                    <span>Get Access</span>
                    <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                  </a>
                  <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <span>Start a 30-day trial</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:justify-center lg:items-center">
              <div className="lg:w-96 relative">
                <div className="absolute top-0 right-0 w-40 h-40 lg:w-96 lg:h-96 bg-tranparent border border-teal-200 rounded-full -m-6 dark:border-teal-900" />
                <div className="absolute bottom-0 left-0 w-40 h-40 lg:w-96 lg:h-96 bg-tranparent border border-indigo-200 rounded-full -m-6 dark:border-indigo-900" />
                <div className="absolute rounded-full bg-gradient-to-br from-purple-200 top-0 left-0 w-36 h-36 -mt-10 -ml-10 dark:from-purple-800" />
                <div className="absolute rounded-3xl bg-gradient-to-tl from-amber-200 bottom-0 right-0 w-24 h-24 -mb-8 -mr-8 rotate-12 dark:from-orange-900" />
                <div className="absolute rounded-3xl bg-gradient-to-bl from-teal-200 top-0 right-0 w-32 h-40 -mt-10 -mr-8 -rotate-6 dark:from-teal-800" />
                <div className="absolute rounded-3xl bg-gradient-to-tr from-indigo-200 bottom-0 left-0 w-32 h-40 -mb-8 -ml-8 rotate-12 dark:from-indigo-800" />
                <img src="https://cdn.tailkit.com/media/placeholders/photo-MChSQHxGZrQ-800x1000.jpg" className="relative rounded-lg mx-auto shadow-lg" alt="Hero Image" />
              </div>
            </div>
          </div>
          {/* END Hero Content */}
        </div>
        {/* END Hero Section: Image Side with Header Actions */}
      </>
    )
  }
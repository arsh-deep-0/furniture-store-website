import ImageCarousal from "./ImageCarousal";

export default function Project() {
    return (
      <>
        {/* Page Header Section: Simple Dark */}
        <div className="dark">
          <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
            <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
              <div className="text-center">
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                  Documentation
                </div>
                <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                  Getting Started with Tailkit
                </h2>
                <h3 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
                  Get to know how it can help you build the User Interface of your website and web application with the minimal effort.
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* END Page Header Section: Simple Dark */}

        <ImageCarousal />
      </>
    )
  }
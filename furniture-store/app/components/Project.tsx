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
                OUR PROJECT
              </div>
              <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                Explore our kitchen designs
              </h2>
              <h3 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
                Explore finished kitchens from some of our customers and see how they created their dream kitchen while getting ideas for your own.
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* END Page Header Section: Simple Dark */}

      <ImageCarousal />
      <ImageCarousal />
    </>
  )
}
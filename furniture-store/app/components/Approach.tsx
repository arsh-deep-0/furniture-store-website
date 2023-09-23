export default function Approach() {
  return (
    <>
      {/* Hero Section: Image Side with Header Actions */}
      <div className="relative dark overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">
  {/* Hero Content */}
  <div className="grid items-center justify-center px-4 sm:px-4">
    <div
      className="md:max-w-7xl sm:flex items-center relative grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-16 text-center lg:text-left container mx-auto sm:max-w-xl lg:max-w-7xl  my-12 px-4 py-16 lg:px-8 lg:py-32 border rounded-xl bg-cover bg-bottom"
      style={{
        backgroundImage:
          'url("https://dndkitchencabinets.com/wp-content/uploads/2022/06/About_BG_02.jpg")',
      }}
    >
      <div className="lg:flex lg:items-center lg:w-1/2">
        <div>
          <div className="text-sm rounded text-emerald-800 bg-emerald-100 border border-emerald-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-emerald-200 dark:bg-emerald-900/50 dark:border-emerald-800/50">
            Promo Video
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-black mb-4 dark:text-white">
            Ensuring a safe experience from design to installation
          </h1>
          <h2 className="text-lg sm:text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
            We’re following all protocols to ensure your safety and vaccination drives are underway to ensure our employees are ready to meet you safely.
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-6 py-2 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
            >
              <span>More Videos</span>
              <svg
                className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2">
        <div className="w-full relative flex items-center">
          <iframe
            className="rounded-xl"
            width="100%"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Z30Jk8QpAMI?si=O4fICNgPl8HgocBc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
  {/* END Hero Content */}
</div>

      {/* END Hero Section: Image Side with Header Actions */}
    </>
  )
}
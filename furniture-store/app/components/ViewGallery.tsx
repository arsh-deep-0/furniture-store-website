export default function ViewGallery() {
    return (
        <>
            {/* Hero Section: Image Side with Header Actions */}
            <div className="relative overflow-hidden bg-white dark:text-gray-100 dark:bg-gray-900">


                {/* Hero Content */}
                <div className="relative dark grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left container xl:max-w-7xl mx-16 my-12 px-4 py-16 lg:px-8 lg:py-32 border rounded-xl bg-cover bg-bottom bg-gray-600 bg-opacity-40" style={{ backgroundImage: 'url("https://dndkitchencabinets.com/wp-content/uploads/2022/06/h2-bg03.png")' }}>
                    <div className="lg:flex lg:items-center">
                        <div>
                            <div className="text-sm rounded text-blue-800 bg-blue-100 border border-blue-200 font-medium inline-flex px-2 py-1 leading-4 mb-2 dark:text-blue-200 dark:bg-blue-900/50 dark:border-blue-800/50">
                                METHOD
                            </div>
                            <h1 className="text-4xl font-black text-black mb-4 dark:text-white">
                                A modern approach to design
                            </h1>
                            <h2 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                                Work 1:1 with an experienced designer to create your one-of-a-kind kitchen, backed by a perfect fit guarantee.
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                                <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                                    <span>View Our Gallery</span>
                                    <svg className="hi-mini hi-arrow-right inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                                </a>
                                {/* <a href="#" className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-7 py-3.5 leading-6 border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-transparent dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700">
                    <span>Start a 30-day trial</span>
                  </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex lg:justify-center lg:items-center">
                        <div className="w-full relative flex items-center">
                            <div className="absolute top-0 right-0 w-40 h-40 lg:w-96 lg:h-96 bg-transparent border border-teal-200 rounded-full -m-6 dark:border-teal-900" />
                            <div className="absolute bottom-0 left-0 w-40 h-40 lg:w-96 lg:h-96 bg-transparent border border-blue-200 rounded-full -m-6 dark:border-blue-900" />
                            <div className="absolute rounded-full bg-gradient-to-br from-blue-200 top-0 left-0 w-36 h-36 -mt-10 -ml-10 dark:from-blue-800" />
                            <div className="absolute rounded-3xl bg-gradient-to-tl from-amber-200 bottom-0 right-0 w-24 h-24 -mb-8 -mr-8 rotate-12 dark:from-orange-900" />
                            <div className="absolute rounded-3xl bg-gradient-to-bl from-teal-200 top-0 right-0 w-32 h-40 -mt-10 -mr-8 -rotate-6 dark:from-teal-800" />
                            <div className="absolute rounded-3xl bg-gradient-to-tr from-blue-200 bottom-0 left-0 w-32 h-40 -mb-8 -ml-8 rotate-12 dark:from-blue-800" />
                            <img src="https://dndkitchencabinets.com/wp-content/uploads/2022/06/h2-banner6.jpg" className="relative rounded-lg mx-auto shadow-lg" alt="Hero Image" />
                        </div>
                    </div>

                </div>
                {/* END Hero Content */}
            </div>
            {/* END Hero Section: Image Side with Header Actions */}
        </>
    )
}
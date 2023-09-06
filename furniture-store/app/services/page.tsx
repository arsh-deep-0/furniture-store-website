import React from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'

function Services() {
    return (
        <>
            <TopHeader />

            {/* Blog List Section: In Grid */}
            <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
                <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Heading */}
                    <div className="text-center">
                        <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                            Latest Posts
                        </h2>
                        <h3 className="text-xl leading-relaxed font-medium text-gray-700 lg:w-2/3 mx-auto dark:text-gray-300">
                            Be sure to <a href="#" className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">follow us on Twitter</a> or <a href="#" className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">join us</a> to stay up to date about any new posts.
                        </h3>
                    </div>
                    {/* END Heading */}

                    {/* Blog Posts */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
                        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:bg-gray-800">
                            <a href="#" className="block relative group">
                                <div className="flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                                    <svg className="hi-solid hi-arrow-right inline-block w-10 h-10 text-white -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                                </div>
                                <img src="https://cdn.tailkit.com/media/placeholders/photo-73F4pKoUkM0-800x600.jpg" alt="Featured Image of blog post" />
                            </a>
                            <div className="p-6">
                                <div className="mb-3">
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">travel</div>
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">adventure</div>
                                </div>
                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        The 10 best hiking trails in the world you should put in your bucket list
                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    March 3, 2023 · 12 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:bg-gray-800">
                            <a href="#" className="block relative group">
                                <div className="flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                                    <svg className="hi-solid hi-arrow-right inline-block w-10 h-10 text-white -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                                </div>
                                <img src="https://cdn.tailkit.com/media/placeholders/photo-phIFdC6lA4E-800x600.jpg" alt="Featured Image of blog post" />
                            </a>
                            <div className="p-6">
                                <div className="mb-3">
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">travel</div>
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">astronomy</div>
                                </div>
                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        The 20 best places in the world for star gazing
                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    February 23, 2023 · 20 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:bg-gray-800">
                            <a href="#" className="block relative group">
                                <div className="flex items-center justify-center absolute inset-0 bg-blue-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100">
                                    <svg className="hi-solid hi-arrow-right inline-block w-10 h-10 text-white -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" /></svg>
                                </div>
                                <img src="https://cdn.tailkit.com/media/placeholders/photo-T7K4aEPoGGk-800x600.jpg" alt="Featured Image of blog post" />
                            </a>
                            <div className="p-6">
                                <div className="mb-3">
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">travel</div>
                                    <div className="font-semibold inline-flex px-2 py-1 leading-4 text-sm rounded-full text-blue-800 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-75 dark:text-blue-200">adventure</div>
                                </div>
                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        How to explore one of the most beautiful lakes in the whole world
                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    February 15, 2023 · 5 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    Integer fermentum tincidunt auctor. Vestibulum ullamcorper, odio sed rhoncus imperdiet, enim elit sollicitudin orci, eget dictum leo mi nec lectus.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END Blog Posts */}
                </div>
            </div>
            {/* END Blog List Section: In Grid */}

            <Footer />
        </>
    )
}

export default Services
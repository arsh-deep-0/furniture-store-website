'use client'
import React from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'
import TopHeaderButtonless from '../components/TopHeaderButtonless'

function Services() {
    return (
        <>
            <TopHeaderButtonless title=" Our Services" />

            {/* Blog List Section: In Grid */}
            <div className="bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
                <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
                    {/* Heading */}
                    <div className="text-center">
                        <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                            Our Services
                        </div>
                        <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                            We Provide <span className='text-blue-600'> More</span> Than Just <span className='text-blue-600'>Quality Services</span>
                        </h2>

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

                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        Kitchen Renovation
                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    March 3, 2023 · 12 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    With immense experience and knowledge, DND is the premier kitchen remodeling services provider that has been providing these services for over 5 years now.                                </p>
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

                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        New Kitchen Design                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    February 23, 2023 · 20 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    DND understands that your kitchen needs to be changed really fast, but in order to make that happen, you need to hire the best Brampton Kitchen Designers.                                </p>
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

                                <h4 className="font-bold text-lg sm:text-xl mb-2">
                                    <a href="#" className="leading-7 text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                                        Custom Made Kitchen Cabinets                                    </a>
                                </h4>
                                <p className="font-medium text-gray-600 text-sm mb-3 dark:text-gray-400">
                                    February 15, 2023 · 5 min read
                                </p>
                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    One of the key elements that you need to focus on in the kitchen is the cabinets that you have to store all your utensils and kitchen essentials.                                </p>
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
import React from 'react'
import TopHeader from '../components/TopHeader'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <TopHeader />
      {/* Contact Section: Split */}
      <div className="relative bg-gray-50 flex items-center overflow-hidden dark:text-gray-100 dark:bg-gray-900">
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-white dark:bg-gray-800" />
        <div className="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Heading */}
            <div className="flex items-center lg:px-14 xl:px-28 space-y-6">
              <div className="w-full">
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
                  We reply in 24hrs
                </div>
                <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
                  Get in touch
                </h2>
                <h3 className="text-xl leading-relaxed font-medium text-gray-700 dark:text-gray-300">
                  If something does not make sense, feel free to contact us and we will get back to you as soon as possible.
                </h3>
                <h4 className="uppercase text-sm font-semibold tracking-wider mt-12 mb-2">
                  Company Inc.
                </h4>
                <div className="leading-relaxed text-gray-600 dark:text-gray-400">
                  1080 Sunshine Valley, Suite 2563<br />
                  San Francisco, CA 85214<br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </div>
              </div>
            </div>
            {/* END Heading */}

            {/* Contact Form */}
            <div className="flex flex-col items-center lg:px-14 xl:px-20">
              <form className="space-y-6 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label htmlFor="firstname" className="font-medium">First Name</label>
                    <input type="text" id="firstname" name="firstname" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastname" className="font-medium">Last Name</label>
                    <input type="text" id="lastname" name="lastname" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-medium">Email</label>
                  <input type="email" id="email" name="email" className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="font-medium">Message</label>
                  <textarea id="message" name="message" rows={6} className="w-full block border placeholder-gray-500 px-5 py-3 leading-6 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-600 dark:focus:border-blue-500 dark:placeholder-gray-400" defaultValue={""} />
                </div>
                <button type="submit" className="w-full lg:w-auto inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-5 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-600 hover:border-blue-600 focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90">
                  <svg className="hi-mini hi-paper-airplane inline-block w-5 h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" /></svg>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            {/* END Contact Form */}
          </div>
        </div>
      </div>
      {/* END Contact Section: Split */}
    <Footer />
    </>
  )
}

export default Contact
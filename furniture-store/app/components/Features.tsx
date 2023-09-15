import { BsTools } from 'react-icons/bs';
import { FaKitchenSet } from 'react-icons/fa6';
import { BsFillCheckCircleFill } from 'react-icons/bs';


export default function Features() {
  return (
    <>
      {/* Features Section: Modern with Icons */}
      <div className="bg-white dark:text-gray-100 dark:bg-gray-900">
        <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="font-an text-sm uppercase font-bold tracking-wider mb-1 text-blue-600 dark:text-blue-500">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl font-black text-black mb-4 dark:text-white">
              We work to an extremely high <br />standard of customer satisfaction
            </h2>

          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <div className="rounded-md h-20 w-64 gap-2 absolute   flex flex-row items-center justify-center">
                  <BsTools className='icon'></BsTools>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Full Service
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
                Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh, from removing the old countertops..
              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <div className="rounded-md h-10 w-32 gap-2 absolute   flex flex-row items-center justify-center">
                  <FaKitchenSet className='icon' />
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Deliver Value
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
              Value means many things to different people. We pledge to consistently deliver optimal value and satisfaction for each and every client
              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
           
                <div className="rounded-md h-10 w-32 gap-2 absolute   flex flex-row items-center justify-center">
                <BsFillCheckCircleFill className='icon'/>
                </div>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Professional Installation
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
              Our highly skilled craftsmen will expertly install your new kitchen with precision and meticulous attention to detail, ensuring a flawless and seamless fit
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
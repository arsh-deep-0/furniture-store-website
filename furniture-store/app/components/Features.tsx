
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
                <svg className="hi-outline hi-device-phone-mobile inline-block w-8 h-8 text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M754-584 584-754l57-57q23-23 56.5-23t56.5 23l57 57q23 23 23 56.5T811-641l-57 57ZM120-120v-170l180-180L89-683l189-189 212 213 94-95 170 170-94 94 211 213L683-89 470-301 290-120H120Zm237-407 76-76-48-48-48 47-56-56 47-48-51-50-75 76 155 155Zm325 325 76-76-51-50-47 47-57-56 48-48-49-48-76 76 156 155Zm-482 2h56l385-384-57-57-384 385v56Z" /></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Design Concept Creation
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
                Our team of experienced designers transforms your ideas and requirements into a tailored design concept. We pay meticulous attention to every detail, from cabinet finishes to lighting choices, to create a design that perfectly suits your taste.
              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <svg className="hi-outline hi-device-phone-mobile inline-block w-8 h-8 text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 -960 960 960" width="24"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg>              </div>
              <h4 className="text-lg font-bold mb-2">
                Material Selection
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
                With access to a wide range of high-quality materials and finishes, you&apos;ll have the opportunity to handpick the elements that will make your kitchen truly unique. We source materials from trusted suppliers, ensuring durability and aesthetics.
              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <svg className="hi-outline hi-device-phone-mobile inline-block w-8 h-8 text-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18q30 0 58.5 3t55.5 9l-70 70q-11-2-21.5-2H400q-71 0-127.5 17T180-306q-9 5-14.5 14t-5.5 20v32h250l80 80H80Zm542 16L484-282l56-56 82 82 202-202 56 56-258 258ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm10 240Zm-10-320q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Z"/></svg>
              </div>
              <h4 className="text-lg font-bold mb-2">
                Skilled Installation
              </h4>
              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
                Our skilled craftsmen bring your kitchen to life with precision and care. They follow the design plan meticulously, ensuring that every cabinet is perfectly aligned, every countertop is flawlessly installed, and every detail is attended to.
              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
              
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <div className="rounded-md h-20 w-64 gap-2 absolute   flex flex-row items-center justify-center">
                  <BsTools className='icon-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100'></BsTools>
                </div>

              </div>
              <h4 className="text-lg font-bold mb-2">
                Quality Assurance
              </h4>

              <p className="text-center leading-relaxed text-gray-600 dark:text-gray-400">
                Not sure where to start? Let us help. We can handle all aspects of your kitchen refresh, from removing the old countertops..

              </p>
            </div>
            <div className="py-5 text-center">
              <div className="group inline-flex items-center justify-center w-12 h-12 ml-3 mb-8 relative">
+
                <div className="absolute inset-0 rounded-xl -m-3 -rotate-6 bg-blue-400 transition ease-out duration-150 group-hover:rotate-6 group-hover:scale-110 dark:bg-blue-900" />
                <div className="absolute inset-0 rounded-xl -m-3 rotate-2 bg-blue-800 bg-opacity-75 shadow-inner transition ease-out duration-150 group-hover:-rotate-3 group-hover:scale-110 dark:bg-blue-700" />
                <div className="rounded-md h-10 w-32 gap-2 absolute   flex flex-row items-center justify-center">
                  <FaKitchenSet className='icon-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100' />
                </div>

              </div>
              <h4 className="text-lg font-bold mb-2">
                3D Visualization
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
                <BsFillCheckCircleFill className='icon-white relative transition ease-out duration-150 opacity-90 group-hover:scale-125 group-hover:opacity-100'/>
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
import gsap from 'gsap'
import { useEffect, useRef } from 'react';



export default function Modal(){

    useEffect(() => {
        gsap.from('.modal',{
            delay:3,
            x:100,
            duration:1.5,
            opacity:0,
            ease: 'sine.out',

        })

    },[])
    return<>
    {
        <div className="modal dark border rounded-md h-8 w-28 absolute bottom-16 lg:bottom-16 right-5 flex flex-row items-center justify-center">
         <p className='font-frank text-white'>Get Quote</p>
        </div>
    } 
    </>
}
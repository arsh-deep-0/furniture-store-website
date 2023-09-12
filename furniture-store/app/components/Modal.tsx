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
        <div className="modal  border rounded-md h-10 w-32 absolute bottom-5 right-5 flex flex-row items-center justify-center">
         <p className='font-l'>Get Quote</p>
        </div>
    } 
    </>
}
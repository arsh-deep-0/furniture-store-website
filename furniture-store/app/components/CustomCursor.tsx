import { useEffect, useState } from 'react';
import '../css/app.css'; // Create a CSS module for styling
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  
  

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Listen for window resize events

   
     
    
  
    const cursordot = document.querySelector('#cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('#cursor-outline') as HTMLElement;
    const cursorOuterOutline = document.querySelector('#cursor-outer-outline') as HTMLElement;

    window.addEventListener('mousemove', function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursordot.style.left = `${posX}px`;
      cursordot.style.top = `${posY}px`;

      // cursorOutline.style.left=`${posX}px`;
      // cursorOutline.style.top=`${posY}px`;

      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 800, fill: "forwards" })

      cursorOuterOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: "forwards" })

    })

    // Hover an element
    function onMouseHover() {
      console.log("mousehover");
      gsap.to('.cursor-outline', {
        scale: 4,
        duration: 0.3,
      })

      gsap.to('.cursor-outer-outline', {
        scale: 2,
        duration: 0.3,
      })


    }
    function onMouseHoverOut() {
      gsap.to('.cursor-outline', {
        scale: 1,
        duration: 0.3,
      })

      gsap.to('.cursor-outer-outline', {
        scale: 1,
        duration: 0.3,
      })
    }

    const hoverables = document.querySelectorAll('.hoverable');

    for (let i = 0; i < hoverables.length; i++) {
      hoverables[i].addEventListener('mouseenter', onMouseHover);
      hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

  }, []);

  return (
    <> {!isMobile&&<div>
      <div id="cursor-outer-outline" className="cursor-outer-outline"></div>
     <div id="cursor-outline" className="cursor-outline"></div>
     <div id="cursor-dot" className="cursor-dot"></div>
   </div>}
    </>
   
  );
};

export default CustomCursor;

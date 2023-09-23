import { type } from 'os';
import React, { useEffect, useState } from 'react';

const TextTypingEffect = () => {
    const [typedText, setTypedText] = useState('');
  
    const typingSpeed = 40; // Adjust typing speed as needed
  
    useEffect(() => {
      let currentIndex = 0;
      const textsToType = [
        'Crrafting Visions into Reality...',
        'IInspired Designs, Impeccable Execution...',
        'MMake Kitchen a part of family...',
        'DDesign your kitchen with experts...',
        'TTransforming Spaces, Enhancing Lives...',
        'YYour Vision ,Our Expertise, One Dream Kitchen...',
      ];
  
      const typeText = (textIndex:any) => {
        if (currentIndex < textsToType[textIndex].length) {
          setTypedText((prevText) => prevText + textsToType[textIndex].charAt(currentIndex));
          currentIndex++;
          setTimeout(() => typeText(textIndex), typingSpeed);
          //console.log(textIndex );
        } else if (textIndex + 1 < textsToType.length) {
          // After typing one text, move on to the next one
          currentIndex = 0;
          setTimeout(() => setTypedText(' '), 2450); 
         
          setTimeout(() => typeText(textIndex + 1), 3310+((textsToType[0].length-textsToType[textIndex].length)*40)); // Adjust the delay as needed
        }
      };
  
      // Trigger the typing effect when the component mounts
      setTimeout(() => typeText(0), 1000);
    }, []);

  return (
    
      <div className="dark h-24 text-center text-3xl font-m lg:text-5xl font-black text-white sm:text-3xl sm:font-ans">
         {typedText} <span style={{textShadow:'none',color: 'rgba(255, 0, 0, 0)'}}>Hi</span>
      </div>
   
  );
};

export default TextTypingEffect;

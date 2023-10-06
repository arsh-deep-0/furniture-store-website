import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType, { TargetElement } from 'split-type';

// Register the SplitText plugin
gsap.registerPlugin(ScrollTrigger);

const TextRevealingEffect = () => {


    useEffect(() => {

        const textsToType = [
            'Crafting Visions into Reality...',
            'Inspired Designs, Impeccable Execution...',
            'Make Kitchen a part of family...',
            'Design your kitchen with experts...',
            'Transforming Spaces, Enhancing Lives...',
            'Your Vision ,Our Expertise, One Dream Kitchen...',
        ];


        const addTextAnimation = () => {
            let myText = document.querySelectorAll('.text-reveal');
            console.log(myText);

            myText.forEach((char, i) => {
                const text = new SplitType(char as TargetElement, { types: 'chars, words' });

                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: 'top 80%',
                        end: 'top 20%',
                    },
                    opacity: 0.0,
                 
                    stagger: 0.035,
                    duration: 0.4,
                    ease: 'back.inOut',
                    onComplete: () => {
                        text.revert()
                    },
                })
            })
        }

        const changingText = document.querySelector('.text-reveal') as HTMLParagraphElement;

        const changeText = (j: number) => {

            // console.log(j+"Number reached", changingText.innerText);
            changingText.innerText = textsToType[j];
            addTextAnimation();


        }

        const sendRequestTochangeText = (i: number) => {
            const delay = i * 5000;
            console.log(i, "Number");
            setTimeout(() => changeText(i), delay);
        }

        const startCalling = () => {
            for (let i = 0; i < textsToType.length; i++) {
                sendRequestTochangeText(i);
            }
        }


        setTimeout(startCalling, 1200)


    }, []);

    return (

        <div className="">
            <p className='text-reveal dark h-24 text-center text-3xl font-m lg:text-6xl font-black text-white sm:text-3xl sm:font-ans'></p>
        </div>

    );
};

export default TextRevealingEffect;

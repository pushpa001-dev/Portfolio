"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const navLogoRef = useRef(null);
  const navLinksRef = useRef(null);
  const frontendTextRef = useRef(null);
  const nameTextRef = useRef(null);
  const imageRef = useRef(null);
  const ctaTextRef = useRef(null);
  const arrowRef = useRef(null);
  const projectBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 }); // Delay for preloader

      // Navbar Animation
      tl.from(navRef.current, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        ease: "power3.out",
      })
        .from([navLogoRef.current, navLinksRef.current], {
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }, "-=0.5");

      // Large Text Animation (Right to Left)
      tl.from([frontendTextRef.current, nameTextRef.current], {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=0.5");

      // Image Animation (Bottom to Top)
      tl.from(imageRef.current, {
        y: "100%",
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.8");

      // CTA Animation
      tl.from(ctaTextRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(arrowRef.current, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.4")
        .from(projectBtnRef.current, {
          opacity: 0,
          x: -20,
          duration: 0.2,
          ease: "power3.out",
        }, "-=0.2");

      // Scroll Animation for Image
      gsap.to(heroRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} id="hero" className='w-full h-screen sticky top-0 left-0 bg-black overflow-hidden'>
      <section className="relative w-full h-full bg-black flex flex-col ">
        {/* Navigation */}
        <nav
          ref={navRef}
          className="absolute top-0 left-0 w-[300px] md:w-[40vw] xl:w-[45vw] bg-neutral-500 rounded-br-4xl lg:rounded-br-[40px] px-6 md:px-12 py-2 flex justify-between items-center z-50"
        >
          <div ref={navLogoRef} className="text-white font-bebas text-shadow-lg/10 text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wide">
            PUSHPA
          </div>
          <div ref={navLinksRef} className="flex gap-4 md:gap-8">
            <a href="#about" className="  text-neutral-200 hover:text-white font-bebas text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold transition-colors cursor-pointer">ABOUT</a>
            <a href="#contact" className="text-neutral-200 hover:text-white font-bebas text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold transition-colors">CONTACT</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">

          {/* Background Text */}
          <div className="absolute top-[45%] sm:top-[25%] lg:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-0 gap-2 lg:gap-5">
            <h2 ref={frontendTextRef} className="text-white font-oswald text-2xl lg:text-6xl text-start w-full">
              FRONTEND-DEVELOPER
            </h2>
            <h1 ref={nameTextRef} className="text-white font-bebas font-bold text-[25vw] md:text-[20vw] xl:text-[14vw] leading-[0.8]  text-center whitespace-nowrap">
              PUSHPAHAS
            </h1>
          </div>

          {/* Person Image */}
          <div className="absolute bottom-0 lg:bottom-[-23%] z-10 w-full flex justify-center items-end h-[75%] md:h-[85%] lg:h-[100%]  pointer-events-none">
            <div ref={imageRef} className="relative w-auto h-full aspect-[3/4] md:aspect-auto ">
              <Image
                src="/pushpahas21.png"
                alt="Pushpahas"
                width={1000}
                height={1200}
                className="object-contain h-full w-auto saturate-60 drop-shadow-[20px_20px_40px_rgba(0,0,10,20.8)]"
                priority

              />
            </div>
          </div>

          {/* Floating Elements (CTA & Arrow) */}
          <div className="absolute bottom-[10%] md:bottom-[15%] w-full px-4 md:px-12 flex items-center justify-between z-20 max-w-[1400px]">

            {/* Left Text */}
            <div ref={ctaTextRef} className="hidden lg:block text-white font-oswald text-xl lg:text-4xl leading-tight text-right w-[300px]">
              TAKE A LOOK AT<br />MY PROJECTS
            </div>

            {/* Arrow (Desktop) */}
            <div className="hidden lg:flex flex-1 mx-6 items-center justify-center relative h-10">
              {/* Dotted Line */}
              <svg className="w-full h-full absolute top-0 left-0 overflow-visible">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
                <line
                  ref={arrowRef}
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>

            {/* Right Button */}
            <a
              ref={projectBtnRef}
              href="#projects"
              className=" hidden lg:flex bg-white group rounded-2xl text-black font-bebas text-xl lg:text-2xl px-6 py-2 hover:scale-105 hover:tracking-wide items-center gap-2 hover:bg-neutral-200 transition-all duration-300"
            >
              PROJECTS <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Mobile Layout Adjustments for CTA */}
          <div className="lg:hidden absolute bottom-20 w-full flex flex-col items-center gap-4 z-30">
            {/* <div className="text-white font-bebas text-lg text-center opacity-80">
            TAKE A LOOK AT MY PROJECTS
          </div> */}
            <a
              ref={projectBtnRef}
              href="#projects"
              className="bg-white/90 text-black font-bebas text-xl md:text-5xl px-8 py-2 md:px-10 md:py-4 rounded-2xl backdrop-blur-sm hover:bg-neutral-200 transition-colors flex items-center gap-2"
            >
              PROJECTS <span>→</span>
            </a>
          </div>

        </div>
        <div className='absolute  text-[500px] font-bold rotate-45 top-[-40%] right-[-20] text-white font-bebas  opacity-20'>
          <p>DI</p>
        </div>
      </section>
    </div>
  )
}

export default Hero
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const laptopLeftRef = useRef(null);
  const laptopRightRef = useRef(null);
  const textRef = useRef(null);
  const helloRef = useRef(null);
  const whoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate laptop images
      gsap.from([laptopLeftRef.current, laptopRightRef.current], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Start when top of section hits 80% of viewport
          toggleActions: "play none none none",
        },
      });

      // Animate description text
      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animate HELLO text
      gsap.from(helloRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: helloRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Animate WHO I AM text
      gsap.from(whoRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: helloRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full  bg-neutral-900 relative overflow-hidden px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16"
    >
      <p className="text-white xl:hidden font-bebas tracking-widest rotate-90 text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 lg:mb-8">WHO AM I?</p>
      <div className="w-full flex flex-col xl:flex-row gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
        {/* Left Side - Laptop Images */}
        <div className="w-full h-full lg:w-[55%] xl:w-[50%] flex gap-2 md:gap-7 lg:gap-10">
          {/* Left Laptop Image */}
          <div
            ref={laptopLeftRef}
            className="flex-1 hidden xl:flex relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[450px] overflow-hidden grayscale"
          >
            <Image
              src="/stock(1).jpg"
              alt="Laptop workspace"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Vertical Separator */}
          <div className="w-[10px] md:w-[20px] lg:w-[30px] bg-neutral-100"></div>

          {/* Right Laptop Image */}
          <div
            ref={laptopRightRef}
            className="flex-1 relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px] xl:h-[450px] overflow-hidden grayscale"
          >
            <Image
              src="/stock2.jpg"
              alt="Coding on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Description Text */}
        <div
          ref={textRef}
          className="w-full lg:w-[45%] xl:w-[50%] flex items-start justify- lg:justify-start "
        >
          <p className="text-white font-oswald text-xl flex flex-col items-center justify-center md:text-2xl sm:text-2xl  lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed font-light tracking-wide">
            I AM A VERY PASSIONATE FRONTEND WEB<br />
            DEVELOPER WITH MAKING EVERY DESIGN<br />
            AND SITE FEEL REAL AND VERY<br />
            RESPONSIVE WITH NO ISSUES AT ALL BUT<br />
            MY MAIN FEATURE IS TO MAKE YOUR<br />
            WEBSITE FILL THE CUSTOMERS NEEDS AND<br />
            MAKE THEM FEEL COMFORTABLE WITH<br />
            YOUR SITE.
          </p>
        </div>
      </div>

      {/* Bottom Section - HELLO WHO I AM? */}
      <div className=" hidden xl:flex w-full flex-col items-start justify-center gap-6 md:gap-8 lg:gap-12">
        <h1 ref={helloRef} className="text-7xl sm:text-9xl md:text-[10vw] lg:text-[12vw] xl:text-[13vw] 2xl:text-[20vw] text-white font-oswald relative flex flex-row xl:gap-20">HELLO
          <h1 ref={whoRef} className="text-3xl sm:text-7xl md:text-[4vw] lg:text-[5vw] xl:text-[2vw] 2xl:text-[3vw] xl:tracking-wide font-oswald xl:-rotate-90 ">WHO I AM? </h1>
        </h1>

      </div>


      <div className=" hidden xl:flex absolute bottom-[-2%] right-[-2%] opacity-70 overflow-visible pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" fill="none"><path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" fill="rgb(84, 84, 84)"></path></svg>
      </div>
    </section>
  );
}


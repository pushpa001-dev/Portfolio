"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate paragraph
      gsap.from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-full px-10 lg:px-20 py-10 flex flex-col lg:flex-row gap-10 border border-yellow-300 shadow-md/20 relative"
    >
      <div className="absolute w-full h-full top-0 left-0 z-[-1] opacity-5 ">
        <Image
          src="/about.png"
          alt="png"
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
      </div>
      <h2
        ref={headingRef}
        className="w-full items-start justify-start flex flex-row gap-5 lg:flex-col text-[clamp(20px,12vw,200px)] font-oswald font-bold text-neutral-600 leading-[clamp(5px,10vw,200px)]"
      >
        About
        <span className="text-start w-full">Me</span>
      </h2>

      <p
        ref={textRef}
        className="w-full text-[clamp(5px,5vw,30px)] flex flex-col items-center justify-center"
      >
        I’m <span calas> PushpaHas</span>, a passionate front-end web developer. I specialize in
        Next.js, Tailwind CSS, Framer Motion, and GSAP. I love building modern,
        responsive, and interactive web experiences. My focus is on clean
        design, smooth animations, and performance.{" "}
        <span className="hidden lg:flex">
          Always learning and improving to craft better digital experiences. I
          enjoy turning creative ideas into visually engaging, functional
          websites.
        </span>
      </p>
    </section>
  );
}


"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const squareStyle = "flex items-center justify-center bg-[#d9d9d9]";

const gridLayout = [
  { type: "square" },
  { type: "number", value: 2 },
  { type: "square" },
  { type: "number", value: 4 },
  { type: "square" },
  { type: "number", value: 6 },
  { type: "number", value: 1 },
  { type: "square" },
  { type: "number", value: 3 },
  { type: "square" },
  { type: "number", value: 5 },
  { type: "square" },
];

// Projects data: image path, display name and external link for each project
const images = [
  {
    id: 1,
    src: "/project1.png",
    title: "ecommers",
    url: "https://ecommers-nu.vercel.app/",
  },
  {
    id: 2,
    src: "/project2.png",
    title: "jode_restaurent_ai_bot",
    url: "https://jode-restaurent-ai-bot.vercel.app/",
  },
  {
    id: 3,
    src: "/project3.png",
    title: "Tour Landing Page",
    url: "https://luxe-estate-rsvp-hub.vercel.app/",
  },
  {
    id: 4,
    src: "/project4.png",
    title: "Project 4",
    url: "https://tpa-infera.vercel.app/",
  },
  {
    id: 5,
    src: "/project5.png",
    title: "Pushbrew Cafe Landing Page",
    url: "https://pushbrew-animations-studio.vercel.app/",
  },
  {
    id: 6,
    src: "/project6.png",
    title: "Travel_service-ui",
    url: "https://travel-service-ui.vercel.app/",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);
  const footerTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animate Title
      if (titleRef.current) {
        tl.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Animate Desktop Grid Items
      const gridItems = gridRef.current?.children;
      if (gridItems && gridItems.length > 0) {
        tl.from(
          gridItems,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Animate Mobile Grid Items
      const mobileGridItems = mobileGridRef.current?.children;
      if (mobileGridItems && mobileGridItems.length > 0) {
        tl.from(
          mobileGridItems,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      // Animate Footer Text
      if (footerTextRef.current) {
        tl.from(
          footerTextRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full h-full backdrop-blur-2xl bg-black/80 text-white px-6 md:px-10 lg:px-16 xl:px-20 pt-16 pb-12 md:py-20 relative overflow-hidden"
    >
      <div ref={titleRef} className="text-center space-y-4">
        <h2 className="font-bebas font-bold text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] xl:text-[120px] leading-none">
          PROJECTS<span className="text-white">.</span>
        </h2>
      </div>

      <div className="w-full mx-auto mt-12 md:mt-16">
        {/* Desktop / Large layout */}
        <div ref={gridRef} className="hidden xl:grid grid-cols-6 grid-rows-2 gap-6 lg:gap-2">
          {gridLayout.map((item, index) => {
            // Determine which project image corresponds to this square index
            const squareIndexOrder = [0, 2, 4, 7, 9, 11]; // indices of squares in gridLayout
            const imageIndex = squareIndexOrder.indexOf(index);
            const project = imageIndex !== -1 ? images[imageIndex] : null;

            if (item.type === "square" && project) {
              return (
                <Link
                  key={index}
                  href={project.url}
                  className={`aspect-video border rounded-sm  ${squareStyle} relative group overflow-hidden`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover saturate-70 group-hover:scale-110 transition-all duration-400"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:scale-105 group-hover:bg-black/60 transition-colors duration-400 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-sm md:text-base lg:text-lg font-bebas tracking-widest text-white text-center px-2">
                      {project.title}
                    </span>
                  </div>
                </Link>
              );
            }

            if (item.type === "number") {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center text-white font-bebas font-bold text-5xl lg:text-6xl"
                >
                  {item.value}
                </div>
              );
            }

            // Fallback empty square
            return <div key={index} className={`aspect-square ${squareStyle}`} />;
          })}
        </div>

        {/* Mobile layout */}
        <div ref={mobileGridRef} className="xl:hidden overflow-hidden grid grid-cols-2 gap-4">
          {images.map((project) => (
            <Link
              key={project.id}
              href={project.url}
              className={`aspect-video rounded-md ${squareStyle} relative group overflow-hidden`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                className="object-cover rounded-md saturate-70 group-hover:scale-110 border transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-sm md:text-base font-bebas tracking-widest text-white text-center px-2">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <p
        ref={footerTextRef}
        className="mt-12 md:mt-16 text-center font-oswald text-xs sm:text-sm md:text-2xl text-neutral-200 uppercase"
      >
        THESE ARE MY TOP SIX PROJECTS TO SHOW CASE JUST TAKE A LOOK. SEE MY PASSION AND
        POTENTIAL IN WORK.
      </p>

      <div className="absolute -left-28 md:-left-20 -bottom-32 h-[300px] w-[500px] opacity-10">
        <svg viewBox="0 0 500 300" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 250 C150 200 250 300 400 240 L500 200 L500 300 L0 300 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

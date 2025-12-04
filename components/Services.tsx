"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "NEXT JS", icon: "NEXT", bg: "bg-white text-black" },
  { name: "REACT", icon: "⚛", bg: "bg-[#61dafb]" },
  { name: "TAILWIND CSS", icon: "~", bg: "bg-[#38bdf8]" },
  { name: "TYPE SCRIPT", icon: "TS", bg: "bg-[#3178c6]" },
  { name: "GSAP", icon: "G", bg: "bg-[#8cc63e]" },
  { name: "REDUX", icon: "↺", bg: "bg-[#764abc]" },
  { name: "PYTHON", icon: "Py", bg: "bg-[#ffd43b] text-black" },
  { name: "GIT", icon: "Git", bg: "bg-[#f05032]" },
  { name: "GITHUB", icon: "GH", bg: "bg-white text-black" },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      // Animate Title Section
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Animate Vertical Line
      tl.from(
        verticalLineRef.current,
        {
          height: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "-=0.4"
      );

      // Animate Skills
      const skillRows = skillsRef.current?.querySelectorAll(".skill-row");

      if (skillRows && skillRows.length) {
        tl.from(
          skillRows,
          {
            x: -30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.6"
        );

        // Animate lines within skills
        const lines = skillsRef.current?.querySelectorAll(".skill-line");
        if (lines && lines.length) {
          tl.from(
            lines,
            {
              scaleX: 0,
              transformOrigin: "left",
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=1"
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-full bg-black px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20 text-white relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row w-full h-full gap-10 lg:gap-16 xl:gap-24">
        <div ref={titleRef} className="w-full 2xl:h-[500px] flex flex-col gap-6">
          <span className="text-2xl lg:text-4xl tracking-wide text-neutral-300 uppercase font-bebas">
            Skill Chart
          </span>
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="font-bebas tracking-widest font-bold text-[18vw] sm:text-[30vw] md:text-[12vw] lg:text-[10vw] 2xl:text-[150px] leading-none">
              MY SKILLS
              <p className="font-oswald text-end w-full text-sm md:text-base tracking-normal lg:text-2xl text-neutral-200">
                HERE ARE MY SKILLS IN WHICH I AM VERY MUCH <br /> PROFICIENT AND THE MAIN TOOLS I WORK ON.
              </p>
            </h2>
          </div>
        </div>

        <div className="h-full w-full flex flex-col relative pt-6 lg:pt-0">
          <div ref={verticalLineRef} className="absolute left-0 top-2 bottom-2 w-[6px] bg-white" />
          <div ref={skillsRef} className="flex flex-col gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-row flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12"
              >
                <div className="flex-1">
                  <div className="skill-line h-[3px] w-full bg-white/60" />
                </div>
                <span className="font-bebas text-3xl md:text-4xl tracking-wide whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-[-10%] bottom-[-40%] rotate-45 ">
        <h1 className="text-white/30 text-[400px] font-bebas font-bold">DIV</h1>
      </div>
    </section>
  );
}

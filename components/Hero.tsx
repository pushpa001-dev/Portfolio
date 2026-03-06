    "use client";

    import { useEffect, useRef } from "react";
    import Image from "next/image";
    import gsap from "gsap";

    export default function HeroSection() {
      // Refs for text and image
      const containerRef = useRef(null);
      const textRefs = useRef([]);
      const imageRef = useRef(null);

      useEffect(() => {
        const ctx = gsap.context(() => {
          // Timeline for smooth sequence
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

          // Animate text one by one
          tl.from(textRefs.current, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          });

          // Image fade-in
          tl.from(
            imageRef.current,
            {
              y: 2000,
              duration: 0.5,
              ease: "power3.out",
            },

            "-=0.3" // overlap slightly with text
          );
        }, containerRef);

        gsap.from("#blob", {
          scale: 0,
          duration: 0.5,
        })

        return () => ctx.revert();
      }, []);

      return (
        <section
          ref={containerRef}
          className="w-full h-screen flex flex-col items-center justify-center relative px-10 lg:px-20 pt-10 overflow-hidden from-white to-gray-50"
        >
          {/* Text container */}
          <div className="w-full relative items-center justify-center h-full flex flex-col gap-5 lg:gap-10 lg:flex-row pt-5 lg:py-20">
            <div className="w-full lg:h-full flex flex-col justify-start leading-[clamp(20px,9vw,70px)] text-neutral-600/60 ">
              <div
                ref={(el) => (textRefs.current[0] = el)}
                className="text-[clamp(30px,4vw,60px)]  font-bebas "
              >
                Hi, I&apos;m
              </div>
              <span
                ref={(el) => (textRefs.current[1] = el)}
                className="text-[clamp(40px,6vw,100px)] font-stretch-200% text-black/50 font-bebas  text-shadow-lg/20 lg:text-shadow-lg/30 "
              >
                Pushpahas
              </span>
              </div>
              <div className="w-full lg:h-full flex flex-col items-end justify-start leading-[clamp(20px,9vw,70px)] text-neutral-600/60 z-1 ">
              <h1
                ref={(el) => (textRefs.current[2] = el)}
                className=" text-[clamp(40px,10vw,10px)] font-bebas "
              >
                Passionate
              </h1>
              <h1
                ref={(el) => (textRefs.current[3] = el)}
                className=" text-[clamp(40px,6vw,100px)] text-black/50 font-bebas text-end text-shadow-lg/20 lg:text-shadow-lg/30 "
              >
                Frontend Developer
              </h1>
            </div>  
            </div>
            {/* Image container */}
            <div
              
              className="w-full flex items-end justify-center bottom-0 xl:absolute"
            >
              <Image
              ref={imageRef}
                src="/pushpahas.png"
                alt="Pushpahas"
                width={1000}
                height={1000}
                className="w-[80vw] lg:w-[35vw] object-cover "
                quality={100}
                priority
              />
              <div
              id="blob"
              className="w-[95vw] lg:w-[45vw] h-[95vw] flex items-center justify-center lg:h-[45vw] absolute bg-yellow-200 shadow-lg  z-[-1] rounded-full bottom-[-10%] lg:bottom-[-30%] "
              > <h1 className=" text-[clamp(40px,10vw,100px)] font-borel text-orange-400"> Pushpahas</h1> </div>
            </div>
            <div className="w-full flex items-end justify-center bottom-0 absolute p-10 lg:p-20">
              <div className=" w-[70vw] lg:w-[20vw] flex p-1 items-center justify-center h-[15vw] lg:h-[3vw] border border-white rounded-full z-1 backdrop-blur-[10px] shadow-2xl/50 lg:shadow-2xl/90  ">
              <h1 className=" cursor-pointer opacity-85 w-full h-full px-2 bg-white rounded-full text-center flex items-center justify-center flex-row text-black text-[clamp(16px,1.5vw,20px)] font-archivo" >Projects 
                <Image src="/top-right.svg" alt="arrow" width={100} height={100} className="w-[5vw] lg:w-[2vw] opacity-70" quality={100} priority />
              </h1>
              <div className="w-full h-full flex items-center hover:bg-white/20 rounded-full justify-center transition-colors ease-in-out duration-300 cursor-pointer">
                <h1 className="text-white font-poppins font-extralight ">Contact</h1>
              </div>
              </div>
            </div>
        </section>
      );
    }

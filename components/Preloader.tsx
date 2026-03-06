"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
    const containerRef = useRef(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            const chars = textRef.current?.querySelectorAll(".char");

            if (chars && chars.length > 0) {
                tl.from(chars, {
                    y: 100,
                    opacity: 0,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power4.out",
                });
            }

            tl.to(containerRef.current, {
                y: "-100%",
                duration: 0.5,
                ease: "power4.inOut",
                delay: 0,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >
            <h1
                ref={textRef}
                className="text-white font-bebas text-6xl md:text-9xl tracking-widest flex overflow-hidden"
            >
                {"PUSHPAHAS".split("").map((char, index) => (
                    <span key={index} className="char  inline-block">
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
}

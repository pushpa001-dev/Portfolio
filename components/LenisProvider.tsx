"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let frameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    const onAnchorClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href?.startsWith("#")) return;

      e.preventDefault();

      if (href === "#top") {
        lenis.scrollTo(0);
      } else {
        const target = document.querySelector(href);
        if (target) {
          lenis.scrollTo(target as HTMLElement);
        }
      }
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);

  return <>{children}</>;
}



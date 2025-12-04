import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    icon: "/linkedin.png",
    href: "https://www.linkedin.com/in/k-pushpahas-375580317/",
  },
  {
    name: "GitHub",
    icon: "/github.png",
    href: "https://github.com/pushpa001-dev",
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    href: "https://www.instagram.com/k.pushpahas/",
  },
  {
    name: "X",
    icon: "/x",
    href: "https://x.com/pushpa_has",
  },
];

export default function Footer() {
  return (
    <footer className="w-full relative z-40 bg-black text-white pt-8 pb-6 border-t border-b border-white/40">
      {/* Top content row */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Brand */}
        <div className="space-y-1">
          <h3 className="font-bebas text-2xl md:text-3xl tracking-wide">PUSHPA</h3>
          <p className="font-oswald text-xs md:text-sm text-neutral-400 tracking-widest uppercase">
            FRONTEND DEV
          </p>
        </div>

        {/* Content links */}
        <div className="space-y-2">
          <h4 className="font-bebas text-xl md:text-2xl tracking-wide">CONTENT</h4>
          <nav className="flex flex-col gap-1 font-oswald text-xs md:text-sm text-neutral-300">
            <a href="#hero" className="hover:text-white transition-colors">
              HOME
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              ABOUT
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              PROJECTS
            </a>
          </nav>
        </div>

        {/* To talk */}
        <div className="space-y-2">
          <h4 className="font-bebas text-xl md:text-2xl tracking-wide">TO TALK</h4>
          <a
            href="#contact"
            className="font-oswald text-xs md:text-sm text-neutral-300 hover:text-white transition-colors"
          >
            CONTACT ME
          </a>
        </div>

        {/* Service */}
        <div className="space-y-2 max-w-[180px]">
          <h4 className="font-bebas text-xl md:text-2xl tracking-wide">SERVICE</h4>
          <p className="font-oswald text-xs md:text-sm text-neutral-300 leading-relaxed uppercase">
            WORKS AS A FRONTEND DEV.
          </p>
        </div>
      </div>

      {/* Bottom social row */}
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-4 px-6">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 md:w-11 md:h-11 rounded-md border border-white/40 flex items-center justify-center bg-white/5 hover:scale-110 hover:bg-white hover:border-white transition-all duration-500 group"
            >
              {social.icon.endsWith(".png") ? (
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain invert group-hover:invert-0 transition-all duration-300"
                />
              ) : (
                <span className="font-bebas group-hover:text-black text-xl">X</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
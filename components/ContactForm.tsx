import Image from "next/image";

const contacts = [
  {
    label: "K PUSPHAHAS",
    value: "LinkedIn",
    icon: "linkedin.png",
    href: "https://www.linkedin.com/in/k-pushpahas-375580317/",
  },
  {
    label: "PUSHPA001-DEV",
    value: "GitHub",
    icon: "github.png",
    href: "https://github.com/pushpa001-dev",
  },
  {
    label: "PUSHPAHAS77@GMAIL.COM",
    value: "Email",
    icon: "mail.png",
    href: "mailto:pushpahas77@gmail.com",
  },
  {
    label: "+91 93920 47174",
    value: "Phone",
    icon: "phono.png",
    href: "tel:+919392047174",
  },
  {
    label: "K.PUSPHAHAS",
    value: "Instagram",
    icon: "instagram.png",
    href: "https://www.instagram.com/k.pushpahas/",
  },
  {
    label: "@PUSPHA-HAS",
    value: "X",
    icon: "x",
    href: "https://x.com/pushpa_has",
  },
];

const IconBox = ({ icon, label }: { icon: string; label: string }) => {
  const base =
    "w-12 h-12 sm:w-14 sm:h-14 rounded-lg border border-white/20 flex items-center justify-center overflow-hidden bg-white";

  if (icon.endsWith(".png")) {
    return (
      <div className={base}>
        <Image
          src={`/${icon}`}
          alt={`${label} icon`}
          width={36}
          height={36}
          className="object-contain w-8 group-hover:scale-110 transition-transform duration-300 h-8 sm:w-10 sm:h-10"
        />
      </div>
    );
  }

  return (
    <div className={`${base} text-2xl group-hover:scale-110 transition-transform duration-300 text-black font-semibold`}>
      {icon.toUpperCase()}
    </div>
  );
};

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative z-40 w-full h-full bg-black text-white px-6 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20"
    >
      <div className=" w-full mx-auto flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col flex-2">
          <h2 className="font-bebas font-bold tracking-widest text-[16vw] sm:text-[12vw] md:text-[9vw] lg:text-[7vw] xl:text-[110px] 2xl:text-[200px] leading-none">
            CONTACT ME
          </h2>

          <div className="mt-6 flex-2/3 flex-col divide-y divide-white/20">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 sm:gap-6 py-5 group"
              >
                <IconBox icon={contact.icon} label={contact.value} />
                <div className="flex-1 min-w-0">
                  <p className="font-bebas text-lg sm:text-2xl lg:text-3xl group-hover:tracking-wider transition-all duration-300 uppercase truncate">
                    {contact.label}
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-bebas tracking-widee group-hover:translate-x-2 transition-transform">
                  →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 hidden lg:block  overflow-hidden border border-white/20 ">
          <div className="relative h-full">
            <Image
              src="/handshake.jpg"
              alt="Handshake"
              fill
              className="object-cover w-full hover:scale-110 transition-transform duration-400 grayscale"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
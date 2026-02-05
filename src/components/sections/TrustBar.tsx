import Image from "next/image";

export function TrustBar() {
  const tools = [
    { name: "Sage", logo: "/logos/sage.svg" },
    { name: "Cegid", logo: "/logos/cegid.svg" },
    { name: "Cegid Loop", logo: "/logos/cegid.svg" }, // Même logo que Cegid
    { name: "ACD Groupe", logo: "/logos/acd.svg" },
    { name: "Silae", logo: "/logos/silae.svg" },
    { name: "Pennylane", logo: "/logos/pennylane.svg" },
    { name: "MyUnisoft", logo: "/logos/myunisoft.svg" },
    { name: "EBP", logo: "/logos/ebp.svg" },
    { name: "Meg", logo: "/logos/meg.svg" },
    { name: "Quadra", logo: "/logos/quadra.svg" },
    { name: "Fulll", logo: "/logos/fulll.svg" },
    { name: "Yooz", logo: "/logos/yooz.svg" },
    { name: "Open Paie", logo: "/logos/openpaie.svg" },
  ];

  return (
    <section className="py-8 md:py-10 border-y bg-emerald-50/10 border-emerald-100/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] md:text-xs font-semibold uppercase tracking-wider text-emerald-900/40 mb-6 md:mb-8">
          Maitrise parfaite de vos outils de production
        </p>
        
        {/* Marquee Effect Wrapper */}
        <div className="relative flex overflow-x-hidden group">
          {/* Mobile: gap-8, Desktop: gap-16 */}
          {/* Vitesse : 15s sur mobile (rapide), 35s sur desktop (calme) */}
          <div className="animate-marquee [animation-duration:15s] md:[animation-duration:35s] whitespace-nowrap flex items-center gap-8 md:gap-16 min-w-full">
            {/* Double boucle pour scroll infini fluide (50% translation) */}
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="relative h-10 w-24 md:h-16 md:w-32 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0">
                <Image 
                  src={tool.logo} 
                  alt={`Logo ${tool.name}`} 
                  width={120}
                  height={60}
                  className="object-contain max-h-6 md:max-h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

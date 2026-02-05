"use client";

import * as React from "react";
import Link from "next/link";
import { BarChart3, ArrowRight, Shield, Users, Rocket, FileText, Zap, LucideIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const expertiseLinks = [
  { title: "Saisie Comptable", href: "/services/saisie-comptable", icon: Zap, desc: "Production back-office rigoureuse." },
  { title: "Gestion Sociale", href: "/services/externalisation-paie", icon: Users, desc: "Paie et DSN sur Silae." },
  { title: "Immobilier", href: "/secteurs/immobilier", icon: Rocket, desc: "SCI, LMNP et copropriétés." },
];

const companyLinks = [
  { title: "À Propos", href: "/a-propos", icon: FileText, desc: "Notre mission et nos valeurs." },
  { title: "Notre Équipe", href: "/notre-equipe", icon: Users, desc: "Des experts formés en France." },
  { title: "Onboarding", href: "/processus-integration", icon: Rocket, desc: "Comment démarrer avec nous." },
  { title: "Sécurité", href: "/securite", icon: Shield, desc: "Protection de vos données." },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-[100] transition-all duration-700 px-4", isScrolled ? "pt-4" : "pt-6")}>
        <nav className={cn("container mx-auto transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)", isScrolled ? "max-w-5xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full py-2 px-6" : "max-w-7xl bg-transparent py-2 px-0")}>
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-emerald-900 group shrink-0" onClick={() => setIsOpen(false)}>
              <div className="bg-emerald-600 text-white p-1.5 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-emerald-500/20">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline italic">SAV<span className="text-emerald-600">Consulting</span></span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent font-semibold text-emerald-600 hover:text-emerald-600 transition-colors h-10 px-4 rounded-full">
                      Expertise
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-3xl border-emerald-100 shadow-2xl">
                      <ul className="grid w-[400px] gap-2 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white/95 backdrop-blur-xl">
                        {expertiseLinks.map((link) => (
                          <ListItem key={link.title} title={link.title} href={link.href} icon={link.icon}>
                            {link.desc}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent font-semibold text-emerald-600 hover:text-emerald-600 transition-colors h-10 px-4 rounded-full">
                      Société
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="rounded-3xl border-emerald-100 shadow-2xl">
                      <ul className="grid w-[400px] gap-2 p-6 md:w-[500px] md:grid-cols-2 bg-white/95 backdrop-blur-xl">
                        {companyLinks.map((link) => (
                          <ListItem key={link.title} title={link.title} href={link.href} icon={link.icon}>
                            {link.desc}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/etudes-de-cas" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-semibold text-emerald-600 hover:text-emerald-600 h-10 px-4 rounded-full")}>
                        Success Stories
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                      <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-semibold text-emerald-600 hover:text-emerald-600 h-10 px-4 rounded-full")}>
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>

              <Button size="sm" className="rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-all px-6 ml-4 shadow-lg shadow-rose-500/20" asChild>
                <Link href="/contact?subject=audit">
                  Audit Gratuit <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* MOBILE BURGER BUTTON */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "md:hidden relative z-[110] p-2 -mr-2 flex flex-col gap-1.5 items-center justify-center w-10 h-10 group rounded-full transition-all duration-300",
                isScrolled ? "bg-emerald-100/50" : "bg-white/10 backdrop-blur-md border border-white/10"
              )} 
              aria-label="Menu"
            >
              <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className={cn("w-5 h-0.5 rounded-full transition-colors", isScrolled || isOpen ? "bg-emerald-950" : "bg-white")} />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className={cn("w-5 h-0.5 rounded-full transition-colors", isScrolled || isOpen ? "bg-emerald-950" : "bg-white")} />
              <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className={cn("w-5 h-0.5 rounded-full transition-colors", isScrolled || isOpen ? "bg-emerald-950" : "bg-white")} />
            </button>
          </div>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-white backdrop-blur-3xl md:hidden overflow-y-auto pt-28 pb-12 px-8"
          >
            <div className="flex flex-col gap-10">
              
              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 opacity-60">Expertise</p>
                <div className="grid gap-4">
                  {expertiseLinks.map((link) => (
                    <Link key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-3xl font-black text-emerald-900 flex items-center justify-between group">
                      {link.title} <ArrowRight className="text-slate-300 group-hover:text-emerald-600 transition-colors" size={24} />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 opacity-60">Société</p>
                <div className="grid gap-4">
                  {companyLinks.map((link) => (
                    <Link key={link.title} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-emerald-700 hover:text-emerald-600">
                      {link.title}
                    </Link>
                  ))}
                  <Link href="/etudes-de-cas" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-emerald-700 hover:text-emerald-600 underline underline-offset-8 decoration-emerald-100">
                    Success Stories
                  </Link>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-emerald-700 hover:text-emerald-600">
                    Contact
                  </Link>
                </div>
              </div>

              <div className="pt-10 border-t border-emerald-100 flex flex-col gap-4">
                <Button size="lg" className="rounded-full bg-rose-600 h-16 text-xl shadow-xl shadow-rose-900/20" asChild>
                  <Link href="/contact?subject=audit" onClick={() => setIsOpen(false)}>Réserver un Audit</Link>
                </Button>
                <div className="flex items-center justify-center gap-2 text-emerald-400">
                   <Mail size={14} />
                   <span className="text-xs font-medium">Réponse sous 2h garantie</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: LucideIcon }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 rounded-[1.5rem] p-4 leading-none no-underline outline-none transition-all hover:bg-emerald-50 hover:text-emerald-600 focus:bg-emerald-50",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              {Icon && <Icon size={16} />}
            </div>
            <div className="text-sm font-bold leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-emerald-500 mt-2 group-hover:text-emerald-600/80 transition-colors">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

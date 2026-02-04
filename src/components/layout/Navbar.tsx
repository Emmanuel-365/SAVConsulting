"use client";

import * as React from "react";
import Link from "next/link";
import { BarChart3, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Notre Méthode", href: "#method" },
  { name: "Pourquoi nous ?", href: "#why-us" },
  { name: "Tarifs", href: "#pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll quand le menu est ouvert
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-4",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <nav
          className={cn(
            "container mx-auto transition-all duration-500 ease-in-out",
            isScrolled
              ? "max-w-4xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full py-2 px-6"
              : "max-w-7xl bg-transparent py-2 px-0"
          )}
        >
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <Link 
              href="/" 
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 group shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="bg-blue-600 text-white p-1.5 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className={cn("transition-colors", isScrolled ? "text-slate-900" : "text-slate-900")}>
                SAV<span className="text-blue-600">Consulting</span>
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="rounded-full bg-slate-900 text-white hover:bg-blue-600 transition-all px-6" asChild>
                <Link href="#contact">
                  Audit Gratuit <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* MOBILE BURGER BUTTON (Custom) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 -mr-2 flex flex-col gap-1.5 items-center justify-center w-10 h-10 group"
              aria-label="Menu"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-900 rounded-full transition-colors group-hover:bg-blue-600" 
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-slate-900 rounded-full transition-colors group-hover:bg-blue-600" 
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-slate-900 rounded-full transition-colors group-hover:bg-blue-600" 
              />
            </button>
          </div>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-white/80 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col h-full pt-32 px-8">
              <div className="flex flex-col gap-8">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto pb-12 flex flex-col gap-6"
              >
                <div className="h-px bg-slate-200 w-full" />
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Prêt à commencer ?</p>
                  <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 h-16 text-xl shadow-xl shadow-blue-200" asChild>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Démarrer un Pilote Gratuit
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

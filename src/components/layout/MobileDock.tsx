"use client";

import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function MobileDock() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });
  
  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <div className="flex items-center gap-3 p-2 rounded-2xl bg-blue-950/90 backdrop-blur-lg border border-white/10 shadow-2xl ring-1 ring-black/5">
            
            <a href="https://wa.me/33659244451" target="_blank" rel="noopener noreferrer" aria-label="Nous contacter sur WhatsApp">
              <Button size="icon" className="h-12 w-12 rounded-xl bg-blue-600 hover:bg-green-700 text-white shadow-lg shrink-0">
                <FaWhatsapp className="size-6" />
              </Button>
            </a>

            <a href="?subject=audit#contact" className="flex-1" aria-label="Réserver un pack maintenant">
              <Button size="lg" className="w-full h-12 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-lg shadow-rose-900/20">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Réserver un pack
              </Button>
            </a>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
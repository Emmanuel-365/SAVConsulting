"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Lignes traitées / an", value: 500000, suffix: "+", color: "text-slate-600" },
  { label: "Bulletins de paie / mois", value: 2500, suffix: "+", color: "text-rose-600" },
  { label: "Réactivité moyenne", value: 2, suffix: "h", color: "text-rose-500" },
  { label: "Taux de fidélité", value: 98, suffix: "%", color: "text-slate-600" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function KeyFigures() {
  return (
    <section className="py-20 bg-rose-50/10 border-y border-rose-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center space-y-2"
            >
              <div className={`text-3xl md:text-5xl font-black tracking-tighter ${stat.color}`}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] md:text-xs font-black text-blue-950/40 uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
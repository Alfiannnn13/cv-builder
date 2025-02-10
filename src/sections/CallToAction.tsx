"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function CallToAction() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity },
    );
  });
  return (
    <section className="py-24">
      <div className="flex overflow-x-clip p-4">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl font-medium md:text-8xl"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-7xl text-lime-400">&#10038;</span>
              <div>
                Coba sekarang <span className="text-lime-400">Gratis!</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

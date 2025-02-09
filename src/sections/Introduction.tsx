"use client";

import Tag from "@/components/tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = ` Banyak layanan pembuatan CV berbayar di luar sana, tapi di sini kamu bisa membuat CV ATS-friendly secara gratis. Cepat, mudah, dan langsung siap digunakan untuk melamar kerja.`;
const words = text.split(' ');

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });

  const [currentWord, setCurrentWord] = useState(0);

  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);
  return (
    <section className="py-28">
      <div className="container">
        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center">
            <Tag>Introducing CvExpress</Tag>
          </div>
          <div className="mt-10 text-center text-4xl font-medium md:text-6xl">
            <span>Buat CV profesional tanpa ribet dan tanpa biaya!</span>
            <span className="">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={twMerge("transition duration-500 text-white/15",wordIndex < currentWord && "text-white")}
                >{`${word} `}</span>
              ))}
            </span>
            <span className="block text-lime-500">
              Itulah sebabnya kami menghadirkan CVExpress.
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}

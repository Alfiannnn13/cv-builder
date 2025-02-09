"use client";

import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";

import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 1 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 1 }],
      [leftDesignScope.current, { y: 230, x: -120 }, { duration: 1 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 1 }],
      [leftPointerScope.current, { y: 0, x: 0 }, { duration: 1 }], // Sama dengan leftDesign
      [leftPointerScope.current, { y: 230, x: -120 }, { duration: 1 }], // Sama dengan leftDesign
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 1, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 1 }],
      [rightDesignScope.current, { y: -100, x: 120 }, { duration: 1 }],
    ]);

    rightPointerAnimate([
      [rightPointerScope.current, { opacity: 1 }, { duration: 1, delay: 1.5 }],
      [rightPointerScope.current, { y: 175, x: 0 }, { duration: 1 }],
      [rightPointerScope.current, { y: 0, x: 120 }, { duration: 1 }],
    ]);
  }, []);
  return (
    <section className="overflow-x-clip py-24">
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image src={designExample1Image} alt="1" width={450} height={500} />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -240 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Data Diri" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          className="absolute -right-64 top-16 hidden lg:block"
        >
          <Image src={designExample2Image} alt="2" width={450} height={500} />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 275, x: 100 }}
          className="absolute -top-4 right-10 hidden lg:block"
        >
          <Pointer name="Pengalaman" color="red" />
        </motion.div>
        <h1 className="mt-6 text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Buat <span className="text-lime-400">CV ATS-Friendly</span> dalam
          Hitungan Menit
        </h1>
        <p className="mx-auto mt-8 text-center text-xl text-white/50">
          Buat CV ATS-Friendly dalam hitungan menit. Tanpa perlu ribet dengan
          desain atau membayar jasa pembuatan CV! Cukup isi informasi, dan CV
          profesionalmu siap digunakan. Lebih cepat, lebih praktis.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/resumes">
            <Button variant="primary" className="font-medium">
              Coba Sekarang
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import logoImage from "@/assets/icon.png";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { label: "Beranda", href: "#" },
  { label: "Fitur", href: "#features" },
  { label: "FAQ", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container max-w-5xl">
          <div className="rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full">
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3">
              <div>
                {/* <Image
                  src={logoImage}
                  alt="logo"
                  width={35}
                  height={35}
                  className="h-9 w-auto rounded-sm md:h-auto"
                /> */}
                <h1 className="text-lime-400 font-semibold text-lg">CVExpress</h1>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-translate-y-1 rotate-45",
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "translate-y-1 -rotate-45",
                    )}
                  ></line>
                </svg>
                <Link href="/resumes">
                  <Button
                    variant="primary"
                    className="hidden items-center font-medium md:inline-flex"
                  >
                    Masuk
                  </Button>
                </Link>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a href={link.href} key={link.label} className="">
                        {link.label}
                      </a>
                    ))}
                    <Link href="/resumes">
                      <Button variant="primary">Masuk</Button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px] md:pb-[98px] lg:px-[130px]"></div>
    </>
  );
}
